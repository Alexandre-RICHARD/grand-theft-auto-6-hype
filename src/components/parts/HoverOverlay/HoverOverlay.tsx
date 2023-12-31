import React from "react";

import {EventDataTypes, EventText} from "@/IndexImporter";
import "./HoverOverlay.scss";

const HoverOverlay: React.FC<{eventData: EventDataTypes}> = ({eventData}) => {
    return (
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
    );
};

export default HoverOverlay;
