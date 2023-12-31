import React from "react";

import {imageImporter} from "@/IndexImporter";
import "./Media.scss";

const Media: React.FC<{media?: string; type: string}> = ({media, type}) => {
    const switchCase = (type: string) => {
        switch (type) {
            case "image": {
                return (
                    <img
                        className="event-image"
                        src={imageImporter(media)}
                    />
                );
            }
            case "youtube": {
                return (
                    <iframe
                        allowFullScreen
                        className="youtube"
                        color="red"
                        src={media}
                    />
                );
            }
            default: {
                return null;
            }
        }
    };

    return (
        <>
            {switchCase(type)}
        </>
    );
};

export default Media;
