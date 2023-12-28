export const compareNumber = (num1: number, num2: number) => {
    const comparaison: boolean[] = [];

    const num1String = num1.toString();
    const num2String = num2.toString();

    // Get the number of caracters from the smallest number
    const sizeMin = Math.min(num1String.length, num2String.length);
    // Get the size difference between them, eg. 123 and 4589 => 1
    const sizeDiff = Math.abs(num1String.length - num2String.length);

    // If the two numbers are not the same size
    if (sizeDiff > 0) {
        for (let i = 0; i < sizeDiff; i++) {
            comparaison.push(true);
        }
    }

    // If the two numbers are both single digit
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
