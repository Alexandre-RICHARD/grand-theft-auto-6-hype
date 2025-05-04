// =============================================================================

// ? Components

import App from "@components/App";

export {App};

// =============================================================================

// ? Parts components

import Countdown from "@parts/Countdown/Countdown";
import CountdownParts from "@parts/CountdownParts/CountdownParts";
import EventContent from "@parts/EventContent/EventContent";
import EventText from "@parts/EventText/EventText";
import HoverOverlay from "@parts/HoverOverlay/HoverOverlay";
import Media from "@parts/Media/Media";
import Timeline from "@parts/Timeline/Timeline";

export {
    Countdown,
    CountdownParts,
    EventContent,
    EventText,
    HoverOverlay,
    Media,
    Timeline
};

// =============================================================================

// ? SVGs components

import ContractIcon from "@svg/ContractIcon";
import DiagonalLine from "@svg/DiagonalLine";
import ExpendIcon from "@svg/ExpendIcon";

export {
    ContractIcon, DiagonalLine, ExpendIcon
};

// =============================================================================

// ? Functions utilities

import {calculateCountdown} from "@utilities/calculateCountdown";
import {compareNumber} from "@utilities/compareNumber";
import {countdownChangeStyle} from "@utilities/countdownChangeStyle";
import {formatterDate} from "@utilities/formatterDate";
import {imageImporter} from "@utilities/imageImporter";
import {timeIntervalNames} from "@utilities/timeIntervalNames";

export {
    calculateCountdown,
    compareNumber,
    countdownChangeStyle,
    formatterDate,
    imageImporter,
    timeIntervalNames
};

// =============================================================================

// ? Store and slice

import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {eventState} from "@slices/eventDataSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    eventState,
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector
};

// =============================================================================

// ? Assets

import {eventData} from "@assets/eventData.json";

export {eventData};

// =============================================================================

// ? Types and interfaces

import {CountdownDataTypes} from "@utilities/calculateCountdown";
import {EventDataTypes} from "@parts/Timeline/EventTypesInterface";
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export type {
    AppDispatch,
    AppStore,
    CountdownDataTypes,
    EventDataTypes,
    RootState
};

// =============================================================================
