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
            {addNewLine(text).map((partText: string, index: number) => (
                <React.Fragment key={index}>
                    <p key={index}>
                        {partText}
                    </p>
                    <br />
                </React.Fragment>
            ))}
        </blockquote>
    );
};

export default EventText;
