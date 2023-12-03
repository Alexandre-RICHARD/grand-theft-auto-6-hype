import React from "react";
import {useAppSelector} from "@store/hooks";
import {informationsState} from "@slices/informationsSlice";

import DiagonalLine from "@components/svg/DiagonalLine";
import "./App.scss";

const TimelineEvent = ({left, side}: {left: string; side: string}) => (
    <div
        className={`${"timeline-event-box"} ${side}`}
        style={{left}}
    >
        <DiagonalLine side={side} />
        <div className="content-box">
            <div className="content" />
        </div>
    </div>
);

const App: React.FC = () => {
    // Use the typed version create in hooks.ts
    const informationsList = useAppSelector(informationsState.InfoList);
    // const countdownData = useAppSelector(informationsState.CountDown);

    const invertMouseWheelDirection = (event: React.WheelEvent) => {
        const container = document.querySelector(".timeline-container");
        if (container) {
            container.scrollLeft += event.deltaY;
        }
    };

    const timelineMargin = 70;
    const timelineEventWidth = 400;
    const timelineInterval = timelineEventWidth * 0.65;

    const widthStyle = {
        "minWidth": `${
            (informationsList.length - 1) * timelineInterval +
            timelineMargin * 4 +
            timelineEventWidth
        }px`,
        "width": `${
            (informationsList.length - 1) * timelineInterval +
            timelineMargin * 4 +
            timelineEventWidth
        }px`,
    };

    return (
        <div className="timeline-container">
            {/* <DiagonalLine /> */}
            <div
                className="timeline-box"
                style={widthStyle}
                onWheel={invertMouseWheelDirection}
            >
                <div className="timeline">
                    {informationsList.map((_event, index) => (
                        <TimelineEvent
                            key={index}
                            left={`${
                                index * timelineInterval + timelineMargin
                            }px`}
                            side={index % 2 === 0 ? "above" : "below"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
