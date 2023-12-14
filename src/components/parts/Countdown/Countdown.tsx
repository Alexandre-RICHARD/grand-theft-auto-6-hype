import React, {useState, useEffect} from "react";

import {calculateCountdown, ReturnValueTypes} from "@/IndexImporter";
import "./Countdown.scss";

interface CountdownProps {
    date: string;
}

const Countdown: React.FC<CountdownProps> = ({date}) => {
    const [
        countdownData,
        setCountdownData
    ] = useState<ReturnValueTypes>({
        "value": [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        "change": [],
    });

    const countdownPartsName = [
        "an",
        "mois",
        "jour",
        "heure",
        "minute",
        "seconde"
    ];

    useEffect(() => {
        const updateTimer = () => {
            setCountdownData((prev) => {
                const newCountdownData = calculateCountdown(date, prev.value);
                return newCountdownData;
            });
        };
        updateTimer();

        const intervalId = setInterval(() => {
            updateTimer();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <div className="event-countdown">
            {countdownData.value.map((el, index) => {
                let showed = false;
                if (el > 0 || index === 5) {
                    showed = true;
                } else if (index !== 0) {
                    for (let i = 0; i < index - 1; i++) {
                        if (countdownData.value[i] > 0) {
                            showed = true;
                        }
                    }
                }

                if (showed) {
                    let label = countdownPartsName[index];
                    if (index !== 1 && el > 1) {
                        label += "s";
                    }
                    return (
                        <div
                            className="countdown-parts"
                            key={index}
                        >
                            <div className="value-container">
                                <p className="value">
                                    {el.toString()[0]}
                                </p>
                                {el >= 10
                                    ? (
                                        <>
                                            <p className="value">
                                                {el.toString()[1]}
                                            </p>
                                        </>
                                    )
                                    : null}
                            </div>
                            <p className="label">
                                {label}
                            </p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default Countdown;
