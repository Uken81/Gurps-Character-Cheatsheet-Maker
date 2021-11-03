import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { ComponentRefContext, SelectedAdvantagesContext, SelectedDisadvantagesContext } from "../context";
import DisplayAdvantages from "./DisplayAdvantages";
import DisplayDisadvantages from "./DisplayDisadvantages";

const ComponentToPrint = () => {
    const { componentRef, setComponentRef } = useContext(ComponentRefContext);

    const divRef = useRef();

    const { selectedAdvantagesList } = useContext(SelectedAdvantagesContext);
    const { selectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);

    useEffect(() => {
        const createReference = () => {
            console.log('***Test: componentToPrint');
            setComponentRef(divRef);
            console.log('****creating reference');
        }
        createReference();
    }, [setComponentRef]);



    return (
        <div className='display-container' ref={componentRef}>
            <div className='display-container' >
                <DisplayAdvantages selectedAdvantagesList={selectedAdvantagesList} />
                <DisplayDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
            </div>
        </div>
    )

}

export default ComponentToPrint;