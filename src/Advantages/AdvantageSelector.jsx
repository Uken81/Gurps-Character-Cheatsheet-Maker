import { useEffect, useState } from "react";
import Select from 'react-select';
import SearchBar from "../SearchBar";
import AdvantagesListArray from "./AdvantagesObject/Advantages";


const AdvantageSelector = (props) => {
    const selectedAdvantages = props.selectedAdvantages;
    const setSelectedAdvantages = props.setSelectedAdvantages;

    

    let options;
    
        const createOptions = ()=> {
            options = AdvantagesListArray.map(opt => ({ label: opt.title, value: opt.title }));
            console.log(options);
            
            // return options;
        };
        createOptions();

        // const onChange = (opt)=> {
        //  ()=>   opt=> setSelectedAdvantages(opt)
        // }

    const log = ()=> {
        console.log(options);
        console.log(selectedAdvantages);
    }


    return (
        <div>
            <h1>Select your characters advantages</h1>
            <SearchBar options={options} onChange={opt => setSelectedAdvantages(opt)} placeHolder='Search Advantages'/>
            {/* <Select
                id='searchBar'
                placeholder='Search Advantages'
                options={options}
                isMulti
                onChange={opt => setSelectedAdvantages(opt)}
            /> */}
            <button onClick={log}>Log</button>
        </div>
    );
}

export default AdvantageSelector;