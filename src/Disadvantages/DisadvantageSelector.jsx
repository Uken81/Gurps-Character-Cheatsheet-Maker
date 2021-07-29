import SearchBar from "../Components/SearchBar";
import DisadvantagesListArray from "./DisadvantagesObject/Disadvantages";


const Disadvantageselector = (props) => {
    const selectedDisadvantages = props.selectedDisadvantages;
    const setSelectedDisadvantages = props.setSelectedDisadvantages;

    
    let options;
    
        const createOptions = ()=> {
            options = DisadvantagesListArray.map(opt => ({ label: opt.title, value: opt.title }));
            console.log(options);
        };
        createOptions();

    const log = ()=> {
        console.log(options);
        console.log(selectedDisadvantages);
    }

    return (
        <div>
            <h1>Select your characters Disadvantages</h1>
            <SearchBar options={options} onChange={opt => setSelectedDisadvantages(opt)} placeHolder='Search Disadvantages' />
            <button onClick={log}>Log</button>
        </div>
    );
}

export default Disadvantageselector;