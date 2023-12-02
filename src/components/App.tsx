import React from "react";
import {useAppSelector} from "@store/hooks";
import {informationsState} from "@slices/informationsSlice";

import "./App.scss";

const App: React.FC = () => {
    // Use the typed version create in hooks.ts
    const informationsList = useAppSelector(informationsState.InfoList);
    const countdownData = useAppSelector(informationsState.CountDown);

    return (
        <div className="starter">
            rt
        </div>
    );
};

export default App;
