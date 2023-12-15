import React from "react";

const DiagonalLine: React.FC<{side: string}> = (props) => {
    const {side} = props;

    return (
        <svg
            className={`${"diagonale-line"} ${side}`}
            height="137.5"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                // eslint-disable-next-line @stylistic/max-len
                d="M 22.5 0 L 2.5 11.546875 L 2.5 117.55273 A 12.5 12.5 0 0 0 0 125 A 12.5 12.5 0 0 0 12.5 137.5 A 12.5 12.5 0 0 0 25 125 A 12.5 12.5 0 0 0 22.5 117.50195 L 22.5 11.546875 L 22.5 0 z "
                id="polygon2"
            />
        </svg>
    );
};

export default DiagonalLine;
