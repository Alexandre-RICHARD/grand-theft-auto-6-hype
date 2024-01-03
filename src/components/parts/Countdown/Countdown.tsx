/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";

import {
    calculateCountdown,
    CountdownDataTypes,
    countdownChangeStyle,
    timeIntervalNames as timeName
} from "@/IndexImporter";
import "./Countdown.scss";

const Countdown: React.FC<{id: string; date: string; startingDate: string}> = ({
    id,
    date,
    startingDate,
}) => {
    const [
        countdownData,
        setCountdownData
    ] = useState<CountdownDataTypes>({
        "value": [],
        "change": [],
        "purcent": 0,
    });

    const updateTimer = () => {
        setCountdownData((prev) => {
            const newV = calculateCountdown(startingDate, date, prev.value);
            return newV;
        });
    };

    useEffect(() => {
        updateTimer();

        const intervalId = setInterval(() => {
            updateTimer();
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        countdownChangeStyle(countdownData, id, date);
    }, [countdownData]);

    return (
        <div className="countdown-container">
            <div className="event-countdown">
                {countdownData.value.map((el, index) => {
                    const elS = el.toString();

                    let showed = false;
                    if (el[0] > 0 || index === 5) {
                        showed = true;
                    } else if (index !== 0) {
                        for (let i = 0; i < index; i++) {
                            if (countdownData.value[i][0] > 0) {
                                showed = true;
                            }
                        }
                    }

                    if (showed) {
                        let [
                            , label
                        ] = timeName[index];
                        if (index !== 1 && el[0] > 1) {
                            label += "s";
                        }
                        return (
                            <div
                                className={
                                    `countdown-parts ${timeName[index][0]}`
                                }
                                key={index}
                            >
                                <div className="value-container">
                                    {el[0] >= 10
                                        ? (
                                            <div className="value-box decimal">
                                                <p className="value">
                                                    {elS[0]}
                                                </p>
                                            </div>
                                        )
                                        : null}
                                    <div className="value-box unit">
                                        <p className="value">
                                            {el[0] >= 10 ? elS[1] : elS[0]}
                                        </p>
                                    </div>
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
            <div className="progression">
                {countdownData.purcent}
                %
            </div>
        </div>
    );
};

export default Countdown;
