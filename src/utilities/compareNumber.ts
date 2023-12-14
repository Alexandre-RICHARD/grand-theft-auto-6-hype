export const compareNumber = (num1: number, num2: number) => {
    const comparaison = [];

    const num1String = num1.toString();
    const num2String = num2.toString();

    const sizeMin = Math.min(num1String.length, num2String.length);
    const sizeDiff = Math.abs(num1String.length - num2String.length);

    if (sizeDiff > 0) {
        for (let i = 0; i < sizeDiff; i++) {
            comparaison.push(true);
        }
    }

    if (sizeDiff === 0 && sizeMin === 1) {
        comparaison.push(false);
    }

    for (let i = sizeMin; i > 0; i--) {
        if (
            num1String[num1String.length - i] ===
            num2String[num2String.length - i]
        ) {
            comparaison.push(false);
        } else {
            comparaison.push(true);
        }
    }

    return comparaison;
};
