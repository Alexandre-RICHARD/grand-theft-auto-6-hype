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
                    `#${id} .${timeName[index][0]} .decimal .value`
                );
                if (decimal) {
                    decimal.classList.add("incoming-number", el[0].how);

                    const decimalOut = document.createElement("p");
                    decimalOut.textContent = data.value[index][1].toString()[0];
                    decimalOut.classList.add("outgoing-number", el[0].how);
                    const parent = document.querySelector(
                        `#${id} .${timeName[index][0]} .decimal`
                    );
                    parent?.appendChild(decimalOut);

                    setTimeout(() => {
                        decimal.classList.remove("incoming-number", el[0].how);
                        parent?.removeChild(decimalOut);
                    }, 200);
                }
            }
            if (el[1].isChanged) {
                const unit = document.querySelector(
                    `#${id} .${timeName[index][0]} .unit .value`
                );
                if (unit) {
                    unit.classList.add("incoming-number", el[1].how);

                    const unitOut = document.createElement("p");
                    unitOut.textContent = data.value[index][1].toString()[1];
                    unitOut.classList.add("outgoing-number", el[1].how);
                    const parent = document.querySelector(
                        `#${id} .${timeName[index][0]} .unit`
                    );
                    parent?.appendChild(unitOut);


                    setTimeout(() => {
                        unit.classList.remove("incoming-number", el[1].how);
                        parent?.removeChild(unitOut);
                    }, 200);
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
                if (el[0] > 0 || index === 5) {
                    showed = true;
                } else if (index !== 0) {
                    for (let i = 0; i < index - 1; i++) {
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
                            className={`countdown-parts ${timeName[index][0]}`}
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
    );
};

export default Countdown;
