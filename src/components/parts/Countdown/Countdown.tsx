import React, {useState, useEffect} from "react";

import {calculateCountdown} from "@/IndexImporter";
import "./Countdown.scss";

interface CountdownProps {
    date: string;
}

const Countdown: React.FC<CountdownProps> = ({date}) => {
    const [
        countdownData,
        setCountdownData
    ] = useState([
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]);

    useEffect(() => {
        const updateTimer = () => {
            setCountdownData(calculateCountdown(date));
        };
        updateTimer();

        const intervalId = setInterval(() => {
            updateTimer();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [date]);

    return (
        <p className="event-countdown">
            {countdownData.join(" ")}
        </p>
    );
};

export default Countdown;
