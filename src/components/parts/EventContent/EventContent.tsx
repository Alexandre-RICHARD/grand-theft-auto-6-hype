import React from "react";
import {formatterDate} from "@utilities/formatterDate";
import EventText from "@parts/EventText/EventText";
import Media from "@parts/Media/Media";

import "./EventContent.scss";

interface EventLink {
    name: string;
    link: string;
}

interface InformationsList {
    name: string;
    type: string;
    isText: boolean;
    isMedia: boolean;
    date: string;
    link?: Array<EventLink>;
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
                    <>
                        <Media
                            media={eventData.media}
                            type={eventData.type}
                        />
                    </>
                )
                : null}
            {eventData.link && eventData.type !== "youtube"
                ? (
                    <div className="hover-overlay">
                        <div className="hover-overlay-content-box">
                            <div className="hover-overlay-content">
                                <div className="hover-overlay-link">
                                    {eventData.link.map((el, i) => (
                                        <React.Fragment key={i}>
                                            <a
                                                className="link"
                                                href={el.link}
                                                target="blank"
                                            >
                                                {el.name}
                                            </a>
                                        </React.Fragment>
                                    ))}
                                </div>
                                {eventData.text
                                    ? (
                                        <>
                                            <EventText
                                                link={eventData.link[0].link}
                                                text={eventData.text}
                                            />
                                        </>
                                    )
                                    : null}
                            </div>
                        </div>
                    </div>
                )
                : null}
        </div>
    );
};

export default EventContent;
