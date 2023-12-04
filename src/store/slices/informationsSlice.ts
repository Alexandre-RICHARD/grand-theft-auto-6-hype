import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "@store/store";
import {informationsList, countdownData} from "@assets/informationData.json";

interface EventLink {
    name: string;
    link: string;
}

interface InformationsList {
    name: string;
    type: string;
    isText: boolean;
    isMedia: boolean;
    date: string;
    link: Array<EventLink>;
    description?: string;
    text?: string;
    media?: string;
}

interface InformationsState {
    informationsList: InformationsList[];
    countdownData: {
        name: string;
        date: string;
    };
}

const initialState: InformationsState = {
    "informationsList": informationsList,
    "countdownData": countdownData,
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
