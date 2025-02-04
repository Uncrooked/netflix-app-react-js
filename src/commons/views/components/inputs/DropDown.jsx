import { useCallback } from "react";
import "./DropDown.css";

export default function DropDown(props){

    const allValues = props.values.map(param => <option value={param.value} key={param.id}>{param.name}</option>)

    const handleChange = useCallback((event) => {
        let params = [event];
        if(props.params){
            params = [event,...props.params]
        }
        props.onChangeEvent(...params)
    })
    
    return(
        <select name={props.name} className="dropdown" {...props.onChangeEvent && {onChange:handleChange}}>
            {allValues}
        </select>
    )
}