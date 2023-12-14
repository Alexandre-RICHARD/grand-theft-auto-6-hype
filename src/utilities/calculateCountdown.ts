import {compareNumber} from "@/IndexImporter";

export interface ReturnValueTypes {
    value: number[];
    change: boolean[][];
}

const changeArray = [
    [
        false,
        false
    ],
    [
        false,
        false
    ],
    [
        false,
        false
    ],
    [
        false,
        false
    ],
    [
        false,
        false
    ],
    [
        false,
        false
    ]
];

export const calculateCountdown = (
    date: string,
    prevValue: number[]
): ReturnValueTypes => {
    let startingPoint = new Date(date);
    let endingPoint = new Date();

    if (new Date(date) > new Date()) {
        startingPoint = new Date();
        endingPoint = new Date(date);
    }

    let runYear = true;
    let runMonth = true;
    let year = 1;
    let month = 1;
    let startDate = startingPoint;

    while (runYear) {
        let newDate = new Date(startDate);
        newDate.setFullYear(startDate.getFullYear() + year);
        if (newDate >= endingPoint) {
            newDate = new Date(startDate);
            newDate.setFullYear(startDate.getFullYear() + year - 1);
            startDate = newDate;
            runYear = false;
        } else {
            year += 1;
        }
    }
    year -= 1;

    while (runMonth) {
        let newDate = new Date(startDate);
        newDate.setMonth(startDate.getMonth() + month);
        if (newDate >= endingPoint) {
            newDate = new Date(startDate);
            newDate.setMonth(startDate.getMonth() + month - 1);
            startDate = newDate;
            runMonth = false;
        } else {
            month += 1;
        }
    }
    month -= 1;

    const difference = Math.floor(
        (endingPoint.getTime() - startDate.getTime()) / 1000
    );

    const day = Math.floor(difference / 86400);
    const hour = Math.floor(difference % 86400 / 3600);
    const minute = Math.floor(difference % 86400 % 3600 / 60);
    const second = Math.floor(difference % 86400 % 3600 % 60);

    const valueArray = [
        year,
        month,
        day,
        hour,
        minute,
        second
    ];

    prevValue.forEach((prev, index) => {
        changeArray[index] = compareNumber(prev, valueArray[index]);
    });

    return {
        "value": valueArray,
        "change": changeArray,
    };
};
