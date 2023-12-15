import {compareNumber} from "@/IndexImporter";

export interface ChangeTypes {
    isChanged: boolean;
    how: "null" | "higher" | "lower";
}

export interface ReturnValueTypes {
    value: number[][];
    change: ChangeTypes[][];
}


export const calculateCountdown = (
    date: string,
    prevValue: number[][]
): ReturnValueTypes => {
    const changeArray: ChangeTypes[][] = [];
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
        [year],
        [month],
        [day],
        [hour],
        [minute],
        [second]
    ];

    prevValue.forEach((prev, index) => {
        changeArray[index] = compareNumber(prev[0], valueArray[index][0]);
        [valueArray[index][1]] = prev;
    });

    return {
        "value": valueArray,
        "change": changeArray,
    };
};
