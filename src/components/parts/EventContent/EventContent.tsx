import React, {useState} from "react";
import {formatterDate} from "@utilities/formatterDate";
import Media from "@parts/Media/Media";
import HoverOverlay from "@parts/HoverOverlay/HoverOverlay";
import {EventDataTypes} from "@slices/eventDataSlice";
import ContractIcon from "@svg/ContractIcon";
import ExpendIcon from "@svg/ExpendIcon";

import "./EventContent.scss";

interface EventData {
    eventData: EventDataTypes;
}

const EventContent: React.FC<EventData> = ({eventData}) => {
    const [
        isHover,
        setHover
    ] = useState(false);

    return (
        <div
            className={`
            ${"content"}
            ${eventData.isbigHover ? "hovering" : ""}
            ${!eventData.isbigHover && isHover ? "hovered" : ""}
            `}
        >
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
                        <p className="event-description">
                            {eventData.description}
                        </p>
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
