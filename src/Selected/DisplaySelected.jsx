import SelectedAdvantages from "./Selected/SelectedAdvantages"
import SelectedDisadvantages from "../Selected/Selected/SelectedDisadvantages";

const Selected = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList

    return (  
        <div className='selected'>
            <h1>Selected Advantages</h1>
            <SelectedAdvantages selectedAdvantagesList={selectedAdvantagesList}/>
            <h1>Selected Disadvantages</h1>
            <SelectedDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
        </div>
    );
}
 
export default Selected;