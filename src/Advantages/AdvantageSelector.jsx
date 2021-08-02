import SearchBar from "../Components/SearchBar/SearchBar";
import AdvantagesArray from "./AdvantagesObject/Advantages";


const AdvantageSelector = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;

    let options;
    const createOptions = () => {
        options = AdvantagesArray.map(opt => ({ label: opt.title, value: opt }));
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
        console.log(AdvantagesArray[0].subCategories);
    }


    return (
        <div>
            <h1>Select Your Characters Advantages</h1>
            <SearchBar options={options} onChange={onChange} placeHolder='Search Advantages'/>
            <button onClick={log}>obj</button>
        </div>
    );
}

export default AdvantageSelector;