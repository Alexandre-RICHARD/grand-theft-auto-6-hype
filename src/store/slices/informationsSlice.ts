import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "@store/store";

interface InformationsList {
    name: string;
    date: number;
}

interface InformationsState {
    informationsList: InformationsList[];
    countdownData: {
        name: string;
        date: string;
    };
}

const initialState: InformationsState = {
    "informationsList": [],
    "countdownData": {
        "name": "Trailer",
        "date": "2023-12-05T14:00:00",
    },
};

const informationsSlice = createSlice({
    "name": "informations",
    initialState,
    "reducers": {},
});

// Export all state in one object to have only to imports : Action and State.
export const informationsState = {
    "InfoList": (state: RootState) => state.informations.informationsList,
    "CountDown": (state: RootState) => state.informations.countdownData,
};
export default informationsSlice.reducer;
