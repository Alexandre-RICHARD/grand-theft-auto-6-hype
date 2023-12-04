import React from "react";

import "./EventContent.scss";

interface InformationsList {
    name: string;
    type: string;
    isText: boolean;
    isMedia: boolean;
    date: string;
    description?: string;
    text?: string;
    media?: string;
    link?: string;
}

interface EventContentProps {
    eventData: InformationsList;
}

const EventContent: React.FC<EventContentProps> = ({eventData}) => {
    const formaterDate = (dateStr: string) => {
        interface Options {
            day: "numeric";
            month: "numeric" | "2-digit" | "long" | "short" | "narrow";
            year: "numeric" | "2-digit";
            hour: "numeric" | "2-digit";
            minute: "numeric" | "2-digit";
        }

        const options: Options = {
            "day": "numeric",
            "month": "long",
            "year": "numeric",
            "hour": "numeric",
            "minute": "numeric",
        };
        const date = new Date(dateStr);
        let stringDate = date.toLocaleString("fr-FR", options);
        if (new Date(dateStr).getDate() === 1) {
            stringDate = stringDate.replace("1", "1er");
        }
        const dateFinale = stringDate.replace("à", "-");

        return dateFinale;
    };

    const addNewLine = (text: string) => {
        return text.split("\n");
    };

    return (
        <div className="content">
            <div className="name-date-container">
                <p className="event-date">
                    {formaterDate(eventData.date)}
                </p>
                <p className="event-name">
                    {eventData.name}
                </p>
                <p className="event-description">
                    {eventData.description}
                </p>
            </div>
            {eventData.isMedia
                ? (
                    <img
                        className="image"
                        src={`assets/images/${eventData.media}.png`}
                    />
                )
                : null}
            <div className="hover-overlay">
                <div className="hover-overlay-content-box">
                    <div className="hover-overlay-content">
                        {eventData.text
                            ? addNewLine(eventData.text).map(
                                (partText, index) => (
                                    <>
                                        <p key={index}>
                                            {partText}
                                        </p>
                                        <br />
                                    </>
                                )
                            )
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventContent;
