interface EventLink {
    name: string;
    link: string;
}

export interface EventDataTypes {
    id: string;
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
    startingDate?: string;
    class?: string;
}
