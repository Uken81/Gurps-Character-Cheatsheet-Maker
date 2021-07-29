import SearchBar from "../Components/SearchBar";
import AdvantagesListArray from "./AdvantagesObject/Advantages";


const AdvantageSelector = (props) => {
    const selectedAdvantages = props.selectedAdvantages;
    const setSelectedAdvantages = props.setSelectedAdvantages;

    

    let options;
    
        const createOptions = ()=> {
            options = AdvantagesListArray.map(opt => ({ label: opt.title, value: opt.title }));
            console.log(options);
        };
        createOptions();

    const log = ()=> {
        console.log(options);
        console.log(selectedAdvantages);
    }


    return (
        <div>
            <h1>Select your characters advantages</h1>
            <SearchBar options={options} onChange={opt => setSelectedAdvantages(opt)} placeHolder='Search Advantages'/>
            <button onClick={log}>Log</button>
        </div>
    );
}

export default AdvantageSelector;