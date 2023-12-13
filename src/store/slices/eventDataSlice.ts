import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "@store/store";
import {eventData} from "@assets/eventData.json";

interface EventLink {
    name: string;
    link: string;
}

export interface EventDataTypes {
    name: string;
    type: string;
    isMedia: boolean;
    isbigHover: boolean;
    isCountdown: boolean;
    date: string;
    link: Array<EventLink>;
    description?: string;
    text?: string;
    media?: string;
    class?: string;
}

interface EventInfoTypes {
    eventData: EventDataTypes[];
    ToPreventMaxLen: string;
}

const initialState: EventInfoTypes = {
    "eventData": eventData,
    "ToPreventMaxLen": "A useless info",
};

const eventSlice = createSlice({
    "name": "event",
    initialState,
    "reducers": {},
});

// Export all state in one object to have only to imports : Action and State.
export const eventState = {
    "EventData": (state: RootState) => state.event.eventData,
    "ToPreventMaxLen": (state: RootState) => state.event.ToPreventMaxLen,
};
export default eventSlice.reducer;
