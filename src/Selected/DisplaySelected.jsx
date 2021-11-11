import SelectedAdvantages from "./Selected Atributes/SelectedAdvantages"
import SelectedDisadvantages from "./Selected Atributes/SelectedDisadvantages";

import './displaySelected.styles.css';
import { useContext } from "react";
import { IsChoosingAdvantagesContext, SelectedAdvantagesContext, SelectedDisadvantagesContext } from "../context";

const DisplaySelected = () => {
    const { isChoosingAdvantages, setIsChoosingAdvantages } = useContext(IsChoosingAdvantagesContext);
    const {selectedAdvantagesList} = useContext(SelectedAdvantagesContext);
    const {selectedDisadvantagesList} = useContext(SelectedDisadvantagesContext);

    return (
        <div className='selected-window'>
            <div className="selected-list" onClick={()=> setIsChoosingAdvantages(true)}>
                <h1 style={{color: 'seagreen'}}>Selected Advantages</h1>
                <SelectedAdvantages
                    selectedAdvantagesList={selectedAdvantagesList}
                />
            </div>
            <div className="selected-list" onClick={()=> setIsChoosingAdvantages(false)}>
                <h1 style={{color: 'red'}}>Selected Disadvantages</h1>
                <SelectedDisadvantages
                    selectedDisadvantagesList={selectedDisadvantagesList}
                />
            </div>
        </div>
    );
}

export default DisplaySelected;