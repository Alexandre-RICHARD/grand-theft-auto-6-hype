import React from "react";

const DiagonalLineSmall: React.FC<{side: string}> = (props) => {
    const {side} = props;

    return (
        <svg
            className={`${"diagonale-line"} ${side}`}
            height="46.602886"
            width="44.359844"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                // eslint-disable-next-line @stylistic/max-len
                d="M 44.359844,1.12e-4 21.2659,0 7.565471,22.651261 c -2.4706584,1.055317 -4.5355669,2.878564 -5.8886986,5.19953 -3.4517841,5.978664 -1.40334398,13.623544 4.5753177,17.075324 5.9786579,3.45178 13.6235379,1.40334 17.0753169,-4.57532 1.351614,-2.34191 1.907396,-5.05895 1.583961,-7.7435 L 38.586407,9.999999 Z"
            />
        </svg>
    );
};

export default DiagonalLineSmall;
