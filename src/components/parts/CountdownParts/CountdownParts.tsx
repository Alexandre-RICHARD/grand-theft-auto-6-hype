import React from "react";

import {timeIntervalNames} from "@/IndexImporter";

const CountdownParts: React.FC<{index: number; timeValue: number[]}> = ({
    index,
    timeValue,
}) => {
    const createLabel = (index: number, value: number) => {
        let [
            , label
        ] = timeIntervalNames[index];
        if (index !== 1 && value > 1) {
            label += "s";
        }
        return label;
    };

    const nbToStr = timeValue.toString();

    return (
        <div
            className={`countdown-parts ${timeIntervalNames[index][0]}`}
            key={index}
        >
            <div className="value-container">
                {timeValue[0] >= 10
                    ? (
                        <div className="value-box decimal">
                            <p className="value">
                                {nbToStr[0]}
                            </p>
                        </div>
                    )
                    : null}
                <div className="value-box unit">
                    <p className="value">
                        {timeValue[0] >= 10 ? nbToStr[1] : nbToStr[0]}
                    </p>
                </div>
            </div>
            <p className="label">
                {createLabel(index, timeValue[0])}
            </p>
        </div>
    );
};

export default CountdownParts;
