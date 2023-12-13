import React from "react";

import {imageImporter} from "@/IndexImporter";
import "./Media.scss";

interface MediaProps {
    media?: string;
    type: string;
}

const Media: React.FC<MediaProps> = ({media, type}) => {
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
                        color="white"
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
