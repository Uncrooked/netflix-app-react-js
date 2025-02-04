import LabelSwitcher from "./LabelSwitcher";
import { useState } from "react";

import "./Switcher.css";

export default function Switcher(props) {
    const [isChecked, checkUpdater] = useState(true);

    let value = 0;

    function handleChange(event) {
        checkUpdater(!isChecked);
        value = isChecked ? 1 : 0;
        props.valueToChangeFunction(value);
    }

    return (
        <form action="" className="switcher">
            <LabelSwitcher
                valueFor="new-or-soon"
                labelId="new-label"
                isChecked={isChecked}
                value={0}
                onChangeEvent={handleChange}
            >
                Nouveau
            </LabelSwitcher>
            <LabelSwitcher
                valueFor="new-or-soon"
                labelId="soon-label"
                onChangeEvent={handleChange}
                isChecked={!isChecked}
                value={1}
            >
                Arrive bientôt
            </LabelSwitcher>
        </form>
    );
}
