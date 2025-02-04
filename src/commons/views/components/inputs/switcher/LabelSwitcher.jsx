import "./LabelSwitcher.css";

export default function LabelSwitcher(props) {
    return (
        <div>
            <input
                type="radio"
                id={props.labelId}
                data-value={props.value}
                name={props.valueFor}
                checked={props.isChecked}
                onChange={props.onChangeEvent}
            />
            <label htmlFor={props.labelId}>{props.children}</label>
        </div>
    );
}
