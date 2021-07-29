import SearchBar from "../Components/SearchBar/SearchBar";
import DisadvantagesListArray from "./DisadvantagesObject/Disadvantages";


const Disadvantageselector = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    let options;
    const createOptions = () => {
        options = DisadvantagesListArray.map(opt => ({ label: opt.title, value: opt.title }));
    };
    createOptions();

    let arr = [];
    const onChange = (event) => {
        event.forEach((e) => {
            arr.push(e.value)
        });
        setSelectedDisadvantagesList(arr);
    }

    const log = () => {
        console.log(options);
        console.log(selectedDisadvantagesList);
    }

    return (
        <div>
            <h1>Select Your Characters Disadvantages</h1>
            <SearchBar options={options} onChange={onChange} placeHolder='Search Disadvantages' />
            <button onClick={log}>Log</button>
        </div>
    );
}

export default Disadvantageselector;