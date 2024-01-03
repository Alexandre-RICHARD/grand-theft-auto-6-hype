import {CountdownDataTypes, timeIntervalNames} from "@/IndexImporter";

export const countdownChangeStyle = (
    data: CountdownDataTypes,
    id: string,
    date: string
) => {
    const pastOrFutur = new Date() >= new Date(date) ? "higher" : "lower";
    data.change.forEach((el, index) => {
        if (el[0]) {
            const decimal = document.querySelector(
                `#${id} .${timeIntervalNames[index][0]} .decimal .value`
            );
            if (decimal) {
                const decimalOut = document.createElement("p");
                decimalOut.textContent = data.value[index][1].toString()[0];
                decimalOut.classList.add("number-out", pastOrFutur);
                const parent = document.querySelector(
                    `#${id} .${timeIntervalNames[index][0]} .decimal`
                );
                parent?.appendChild(decimalOut);

                decimal.classList.add("number-in", pastOrFutur);
                setTimeout(() => {
                    decimal.classList.remove("number-in", pastOrFutur);
                    parent?.removeChild(decimalOut);
                }, 200);
            }
        }
        if (el[1]) {
            const unit = document.querySelector(
                `#${id} .${timeIntervalNames[index][0]} .unit .value`
            );
            if (unit) {
                const unitOut = document.createElement("p");
                unitOut.textContent = data.value[index][1].toString()[1];
                unitOut.classList.add("number-out", pastOrFutur);
                const parent = document.querySelector(
                    `#${id} .${timeIntervalNames[index][0]} .unit`
                );
                parent?.appendChild(unitOut);

                unit.classList.add("number-in", pastOrFutur);
                setTimeout(() => {
                    unit.classList.remove("number-in", pastOrFutur);
                    parent?.removeChild(unitOut);
                }, 200);
            }
        }
    });
};
