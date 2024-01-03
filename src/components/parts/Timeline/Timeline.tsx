import React from "react";

import {
    DiagonalLine,
    EventContent,
    eventData,
    EventDataTypes
} from "@/IndexImporter";
import "./Timeline.scss";

const Timeline: React.FC = () => {
    const eventList: EventDataTypes[] = eventData;

    const invertMouseWheelDirection = (event: React.WheelEvent) => {
        const scrollTarget = event.target as Node;
        const eventBoxes = Array.from(
            document.querySelectorAll(".content-box")
        );
        const container = document.querySelector(".timeline-container");
        if (container) {
            if (!eventBoxes.some((el) => el.contains(scrollTarget))) {
                container.scrollLeft += event.deltaY;
            }
        }
    };

    const tlMargin = 70;
    const tlEventWidth = 400;
    const tlInterval = tlEventWidth * 0.65;

    const widthStyle = {
        "width": `${
            (eventList.length - 1) * tlInterval + tlMargin * 4 + tlEventWidth
        }px`,
    };

    return (
        <div
            className="timeline-box"
            style={widthStyle}
            onWheel={invertMouseWheelDirection}
        >
            <div className="timeline">
                {eventList.map((event, index) => {
                    const eventGap = index * tlInterval + tlMargin;
                    const classArray = [
                        "timeline-event-box",
                        index % 2 === 0 ? "above" : "below",
                        event.class ? event.class : ""
                    ];

                    return (
                        <div
                            className={classArray.join(" ")}
                            id={event.id}
                            key={index}
                            style={{"left": eventGap}}
                        >
                            <div className="content-box">
                                <EventContent eventData={event} />
                            </div>
                            <div className="diagonale-line-container">
                                <DiagonalLine
                                    side={index % 2 === 0 ? "above" : "below"}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
