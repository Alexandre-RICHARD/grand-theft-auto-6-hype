import {ChangeTypes} from "@/IndexImporter";

export const compareNumber = (num1: number, num2: number) => {
    const comparaison: ChangeTypes[] = [];

    const num1String = num1.toString();
    const num2String = num2.toString();

    const sizeMin = Math.min(num1String.length, num2String.length);
    const sizeDiff = Math.abs(num1String.length - num2String.length);

    if (sizeDiff > 0) {
        for (let i = 0; i < sizeDiff; i++) {
            comparaison.push({"isChanged": true, "how": "higher"});
        }
    }

    if (sizeDiff === 0 && sizeMin === 1) {
        comparaison.push({"isChanged": false, "how": "null"});
    }

    for (let i = sizeMin; i > 0; i--) {
        if (
            num1String[num1String.length - i] ===
            num2String[num2String.length - i]
        ) {
            comparaison.push({"isChanged": false, "how": "null"});
        } else {
            const changeType =
                num1String[num1String.length - i] >
                num2String[num2String.length - i]
                    ? "lower"
                    : "higher";
            comparaison.push({"isChanged": true, "how": changeType});
        }
    }

    return comparaison;
};
