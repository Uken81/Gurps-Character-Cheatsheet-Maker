import SelectedAdvantages from "./Selected Atributes/SelectedAdvantages"
import SelectedDisadvantages from "./Selected Atributes/SelectedDisadvantages";

import './displaySelected.styles.css';

const DisplaySelected = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
        <div className='selected-window'>
            <div className="selected-list">
                <h1 style={{color: 'seagreen'}}>Selected Advantages</h1>
                <SelectedAdvantages
                    selectedAdvantagesList={selectedAdvantagesList}
                />
            </div>
            <div className="selected-list">
                <h1 style={{color: 'red'}}>Selected Disadvantages</h1>
                <SelectedDisadvantages
                    selectedDisadvantagesList={selectedDisadvantagesList}
                />
            </div>
        </div>
    );
}

export default DisplaySelected;