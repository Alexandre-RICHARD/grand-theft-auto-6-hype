/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";

import {calculateCountdown, ReturnValueTypes} from "@/IndexImporter";
import "./Countdown.scss";

const timeName = [
    [
        "year",
        "an"
    ],
    [
        "month",
        "mois"
    ],
    [
        "day",
        "jour"
    ],
    [
        "hour",
        "heure"
    ],
    [
        "minute",
        "minute"
    ],
    [
        "second",
        "seconde"
    ]
];

interface CountdownProps {
    id: string;
    date: string;
}

// eslint-disable-next-line max-lines-per-function
const Countdown: React.FC<CountdownProps> = ({id, date}) => {
    const [
        countdownData,
        setCountdownData
    ] = useState<ReturnValueTypes>({
        "value": [],
        "change": [],
    });

    const applyChangeStyle = (data: ReturnValueTypes) => {
        data.change.forEach((el, index) => {
            if (el[0].isChanged) {
                const decimal = document.querySelector(
                    `#${id} .${timeName[index][0]} .decimal`
                );
                if (decimal) {
                    decimal.classList.toggle("animate-changed-number");
                    setTimeout(() => {
                        decimal.classList.toggle("animate-changed-number");
                    }, 100);
                }
            }
            if (el[1].isChanged) {
                const unit = document.querySelector(
                    `#${id} .${timeName[index][0]} .unit`
                );
                if (unit) {
                    unit.classList.toggle("animate-changed-number");
                    setTimeout(() => {
                        unit.classList.toggle("animate-changed-number");
                    }, 100);
                }
            }
        });
    };
    const updateTimer = () => {
        setCountdownData((prev) => {
            const newV = calculateCountdown(date, prev.value);
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
        applyChangeStyle(countdownData);
    }, [countdownData]);

    return (
        <div className="event-countdown">
            {countdownData.value.map((el, index) => {
                const elS = el.toString();

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
                    let [
                        , label
                    ] = timeName[index];
                    if (index !== 1 && el > 1) {
                        label += "s";
                    }
                    return (
                        <div
                            className={`countdown-parts ${timeName[index][0]}`}
                            key={index}
                        >
                            <div className="value-container">
                                {el >= 10
                                    ? (
                                        <>
                                            <p className="value decimal">
                                                {elS[0]}
                                            </p>
                                        </>
                                    )
                                    : null}
                                <p className="value unit">
                                    {el >= 10 ? elS[1] : elS[0]}
                                </p>
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
