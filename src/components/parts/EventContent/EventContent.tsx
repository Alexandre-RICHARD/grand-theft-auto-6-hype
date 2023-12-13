import React, {useState} from "react";

import {EventDataTypes} from "@slices/eventDataSlice";
import {
    formatterDate,
    ContractIcon,
    Countdown,
    ExpendIcon,
    HoverOverlay,
    Media
} from "@/IndexImporter";
import "./EventContent.scss";

interface EventData {
    eventData: EventDataTypes;
}

const EventContent: React.FC<EventData> = ({eventData}) => {
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
                {eventData.description
                    ? (
                        <div className="description-countdown">
                            <p className="event-description">
                                {eventData.description}
                            </p>
                            {eventData.isCountdown
                                ? (
                                    <>
                                        <Countdown date={eventData.date} />
                                    </>
                                )
                                : null}
                        </div>
                    )
                    : null}
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
