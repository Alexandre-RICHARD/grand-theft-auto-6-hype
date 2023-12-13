export const calculateCountdown = (date: string): number[] => {
    let i = 1;
    if (new Date(date) > new Date()) {
        i = 0;
    }

    return [
        Math.floor(Math.random() * 9) + i,
        Math.floor(Math.random() * 9) + i,
        Math.floor(Math.random() * 9) + i,
        Math.floor(Math.random() * 9) + i,
        Math.floor(Math.random() * 9) + i,
        Math.floor(Math.random() * 9) + i
    ];
};
