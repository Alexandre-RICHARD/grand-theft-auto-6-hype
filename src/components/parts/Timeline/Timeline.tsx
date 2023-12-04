import React from "react";
import {useAppSelector} from "@store/hooks";
import {informationsState} from "@slices/informationsSlice";

import "./Timeline.scss";
import DiagonalLine from "@svg/DiagonalLine/DiagonalLine";
import EventContent from "@parts/EventContent/EventContent";

const Timeline: React.FC = () => {
    // Use the typed version create in hooks.ts
    const infoList = useAppSelector(informationsState.InfoList);
    // const countdownData = useAppSelector(informationsState.CountDown);

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
        "minWidth": `${
            (infoList.length - 1) * tlInterval + tlMargin * 4 + tlEventWidth
        }px`,
        "width": `${
            (infoList.length - 1) * tlInterval + tlMargin * 4 + tlEventWidth
        }px`,
    };

    return (
        <div
            className="timeline-box"
            style={widthStyle}
            onWheel={invertMouseWheelDirection}
        >
            <div className="timeline">
                {infoList.map((event, index) => {
                    const eventGap = index * tlInterval + tlMargin;
                    return (
                        <div
                            className={`${"timeline-event-box"} ${
                                index % 2 === 0 ? "above" : "below"
                            }`}
                            key={index}
                            style={{"left": eventGap}}
                        >
                            <DiagonalLine
                                side={index % 2 === 0 ? "above" : "below"}
                            />
                            <div className="content-box">
                                <EventContent eventData={event} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
