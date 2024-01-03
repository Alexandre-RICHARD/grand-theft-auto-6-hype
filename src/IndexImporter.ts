// =============================================================================

// ? Components
import App from "@components/App";

export {App};

// =============================================================================

// ? Parts components

import Countdown from "@parts/Countdown/Countdown";
import EventContent from "@parts/EventContent/EventContent";
import EventText from "@parts/EventText/EventText";
import HoverOverlay from "@parts/HoverOverlay/HoverOverlay";
import Media from "@parts/Media/Media";
import Timeline from "@parts/Timeline/Timeline";

export {
    Countdown, EventContent, EventText, HoverOverlay, Media, Timeline
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

// ? Functions middlewares
import {calculateCountdown} from "@utilities/calculateCountdown";
import {compareNumber} from "@utilities/compareNumber";
import {formatterDate} from "@utilities/formatterDate";
import {imageImporter} from "@utilities/imageImporter";

export {
    calculateCountdown, compareNumber, formatterDate, imageImporter
};

// =============================================================================

// ? Types and interfaces
import {EventDataTypes} from "@slices/eventDataSlice";
import {CountdownDataTypes} from "@utilities/calculateCountdown";

export type {EventDataTypes, CountdownDataTypes};

// =============================================================================
