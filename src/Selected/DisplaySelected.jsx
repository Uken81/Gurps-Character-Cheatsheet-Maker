import SelectedAdvantages from "./Selected/SelectedAdvantages"
import SelectedDisadvantages from "../Selected/Selected/SelectedDisadvantages";

const DisplaySelected = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const onClick = (type, name) => {
        if (type === 'advantage') {
            let deselectedAdvantages =  selectedAdvantagesList.filter(obj => obj.title !== name);
            setSelectedAdvantagesList(deselectedAdvantages);
            console.log(deselectedAdvantages);        
        } else {
            let deselectedDisadvantages =  selectedDisadvantagesList.filter(obj => obj.title !== name);
            setSelectedDisadvantagesList(deselectedDisadvantages);
            console.log(deselectedDisadvantages);        
        }
    }

    return (  
        <div className='selected-window'>
            <h1>Selected Advantages</h1>
            <SelectedAdvantages selectedAdvantagesList={selectedAdvantagesList} onClick={onClick}/>
            <h1>Selected Disadvantages</h1>
            <SelectedDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} onClick={onClick} />
        </div>
    );
}
 
export default DisplaySelected;