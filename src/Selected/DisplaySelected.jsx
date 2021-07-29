import SelectedAdvantages from "./Selected Advantages/SelectedAdvantages"
import SelectedDisadvantages from "./Selected Advantages/SelectedDisadvantages";

const Selected = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList

    return (  
        <div>
            <h1>Selected Advantages</h1>
            <SelectedAdvantages selectedAdvantagesList={selectedAdvantagesList}/>
            <h1>Selected Disadvantages</h1>
            <SelectedDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
        </div>
    );
}
 
export default Selected;