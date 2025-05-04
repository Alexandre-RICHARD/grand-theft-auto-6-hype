// ! ESLINT
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";

import {
    calculateCountdown,
    countdownChangeStyle,
    CountdownDataTypes,
    CountdownParts
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

    const showOrHideTimeParts = (index: number, value: number) => {
        let showed = false;
        if (value > 0 || index === 5) {
            showed = true;
        } else if (index !== 0) {
            for (let i = 0; i < index; i++) {
                if (countdownData.value[i][0] > 0) {
                    showed = true;
                }
            }
        }
        return showed;
    };

    return (
        <div className="countdown-container">
            <div className="event-countdown">
                {countdownData.value.map((el, index) => {
                    if (showOrHideTimeParts(index, el[0])) {
                        return (
                            <CountdownParts
                                index={index}
                                key={index}
                                timeValue={el}
                            />
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
