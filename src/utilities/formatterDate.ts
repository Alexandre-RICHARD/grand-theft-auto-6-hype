export const formatterDate = (dateStr: string) => {
    interface Options {
        day: "numeric";
        month: "numeric" | "2-digit" | "long" | "short" | "narrow";
        year: "numeric" | "2-digit";
        hour: "numeric" | "2-digit";
        minute: "numeric" | "2-digit";
    }

    const options: Options = {
        "day": "numeric",
        "month": "long",
        "year": "numeric",
        "hour": "numeric",
        "minute": "numeric",
    };
    const date = new Date(dateStr);
    let stringDate = date.toLocaleString("fr-FR", options);
    if (new Date(dateStr).getDate() === 1) {
        stringDate = stringDate.replace("1", "1er");
    }
    const dateFinale = stringDate.replace("à", "-");

    return dateFinale;
};
