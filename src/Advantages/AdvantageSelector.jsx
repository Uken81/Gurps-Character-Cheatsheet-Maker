import SearchBar from "../Components/SearchBar/SearchBar";
import AdvantagesListArray from "./AdvantagesObject/Advantages";


const AdvantageSelector = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;

    let options;
    const createOptions = () => {
        options = AdvantagesListArray.map(opt => ({ label: opt.title, value: opt.title }));
    };
    createOptions();

    let arr = [];
    const onChange = (event) => {
        event.forEach((e) => {
            arr.push(e.value)
        });
        setSelectedAdvantagesList(arr);
    }

    const log = () => {
        console.log(options);
        console.log(selectedAdvantagesList);
        console.log(arr);
    }


    return (
        <div>
            <h1>Select Your Characters Advantages</h1>
            <SearchBar options={options} onChange={onChange} placeHolder='Search Advantages'/>
            <button onClick={log}>Log</button>
        </div>
    );
}

export default AdvantageSelector;