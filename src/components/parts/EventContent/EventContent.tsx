import React from "react";

import "./EventContent.scss";

interface InformationsList {
    name: string;
    type: string;
    text: boolean;
    media: boolean;
    mediaLink: string;
    link: string;
    date: string;
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

    return (
        <div className="content">
            <p className="date">
                {formaterDate(eventData.date)}
            </p>
            <img
                className="image"
                src={`assets/images/${eventData.mediaLink}.png`}
            />
        </div>
    );
};

export default EventContent;
