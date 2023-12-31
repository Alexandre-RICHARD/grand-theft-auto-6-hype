import React, {useState} from "react";

import {
    formatterDate,
    ContractIcon,
    Countdown,
    ExpendIcon,
    EventDataTypes,
    HoverOverlay,
    Media
} from "@/IndexImporter";
import "./EventContent.scss";

const EventContent: React.FC<{eventData: EventDataTypes}> = ({eventData}) => {
    const [
        isHover,
        setHover
    ] = useState(false);

    const classArray = [
        "content",
        eventData.isbigHover ? "hovering" : "",
        !eventData.isbigHover && isHover ? "hovered" : ""
    ];

    return (
        <div className={classArray.join(" ")}>
            <div className="expend-hover">
                <div className="expend-contract-icon">
                    {!eventData.isbigHover && isHover
                        ? (
                            <div
                                className="expend-contract-icon"
                                onClick={() => setHover(false)}
                            >
                                <ContractIcon />
                            </div>
                        )
                        : !eventData.isbigHover && !isHover
                            ? (
                                <div
                                    className="expend-contract-icon"
                                    onClick={() => setHover(true)}
                                >
                                    <ExpendIcon />
                                </div>
                            )
                            : null}
                </div>
            </div>
            <div className="name-date-container">
                <p className="event-date">
                    {formatterDate(eventData.date)}
                </p>
                <p className="event-name">
                    {eventData.name}
                </p>
                <div className="description-countdown">
                    {eventData.description
                        ? (
                            <p className="event-description">
                                {eventData.description}
                            </p>
                        )
                        : null}
                    {eventData.isCountdown
                        ? (
                            <>
                                <Countdown
                                    date={eventData.date}
                                    id={eventData.id}
                                    startingDate={
                                        eventData.startingDate
                                            ? eventData.startingDate
                                            : ""
                                    }
                                />
                            </>
                        )
                        : null}
                </div>
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
            <HoverOverlay eventData={eventData} />
        </div>
    );
};

export default EventContent;
