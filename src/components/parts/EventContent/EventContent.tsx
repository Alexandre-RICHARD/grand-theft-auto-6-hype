import React from "react";
import {formatterDate} from "@utilities/formatterDate";
import EventText from "@parts/EventText/EventText";

import "./EventContent.scss";

interface InformationsList {
    name: string;
    type: string;
    isText: boolean;
    isMedia: boolean;
    date: string;
    link: Array<string>;
    description?: string;
    text?: string;
    media?: string;
}

interface EventContentProps {
    eventData: InformationsList;
}

const EventContent: React.FC<EventContentProps> = ({eventData}) => {
    return (
        <div className="content">
            <div className="name-date-container">
                <p className="event-date">
                    {formatterDate(eventData.date)}
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
                            ? (
                                <>
                                    <EventText
                                        link={eventData.link[0]}
                                        text={eventData.text}
                                    />
                                </>
                            )
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventContent;
