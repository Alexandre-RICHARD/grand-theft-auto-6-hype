import React from "react";

import "./EventText.scss";

interface EventTextProps {
    text: string;
    link: string;
}

const EventText: React.FC<EventTextProps> = ({text, link}) => {
    const addNewLine = (text: string) => {
        return text.split("\n");
    };
    return (
        <blockquote cite={link}>
            {addNewLine(text).map((partText: string, i: number, array) => (
                <React.Fragment key={i}>
                    <p>
                        {`${i === 0 ? "«" : ""} ${partText} ${
                            i + 1 === array.length ? "»" : ""
                        }`}
                    </p>
                    <br />
                </React.Fragment>
            ))}
        </blockquote>
    );
};

export default EventText;
