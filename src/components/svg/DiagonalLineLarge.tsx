import React from "react";

const DiagonalLineLarge: React.FC<{side: string}> = (props) => {
    const {side} = props;

    return (
        <svg
            className={`${"diagonale-line"} ${side}`}
            height="115.75329"
            width="83.660255"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                // eslint-disable-next-line @stylistic/max-len
                d="M 83.660254,0 60.56631,0 7.5633838,91.803756 a 12.5,12.5 0 0 0 -5.8886986,5.19953 12.5,12.5 0 0 0 4.5753177,17.075324 12.5,12.5 0 0 0 17.0753171,-4.57532 12.5,12.5 0 0 0 1.583961,-7.7435 L 77.886817,9.999999 Z"
            />
        </svg>
    );
};

export default DiagonalLineLarge;
