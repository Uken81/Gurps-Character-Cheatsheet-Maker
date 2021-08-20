import React from "react";
import DisplayAdvantages from "./DisplayAdvantages";
import DisplayDisadvantages from "./DisplayDisadvantages";

 const ComponentToPrint = React.forwardRef((props, ref) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
    <div className='display-container' ref={ref}>
        <DisplayAdvantages selectedAdvantagesList={selectedAdvantagesList} />
        <DisplayDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
    </div>
 )})

export default ComponentToPrint;