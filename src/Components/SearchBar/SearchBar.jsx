import { useEffect, useState } from 'react';
import Select from 'react-select';
import AdvantagesArray from '../../Advantages/Advantages';
import DisadvantagesArray from '../../Disadvantages/Disadvantages';

const SearchBar = (props) => {
    const [advantageOptions, setAdvantageOptions] = useState([]);
    const [disadvantageOptions, setDisadvantageOptions] = useState([]);

    const isChoosingAdvantages = props.isChoosingAdvantages;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

   useEffect(()=> {
    const createAdvantageOptions = () => {
        let arr = AdvantagesArray.map(opt => ({ label: opt.title, value: opt }));
        setAdvantageOptions(arr);
    };
    
    const createDisadvantageOptions = () => {
        let arr = DisadvantagesArray.map(opt => ({ label: opt.title, value: opt }));
        setDisadvantageOptions(arr);
         
    };
    createAdvantageOptions();
    createDisadvantageOptions();    
   },[])
        
 

    let adsArr = [];
    let disadsArr = [];
    const handleChange = (event) => {
        console.log(event);
        event.forEach((e) => {
            console.log(e.value.type);
            e.value.type === 'advantage' ? adsArr.push(e.value) : disadsArr.push(e.value);    
        });
        setSelectedAdvantagesList(adsArr);
        setSelectedDisadvantagesList(disadsArr);
    }

    return (  
        <div>
            <h1>Select your Characters {isChoosingAdvantages ? 'Advantages' : 'Disadvantages'}</h1>
            <Select
                className='searchBar'
                id='searchBar'
                options={isChoosingAdvantages ? advantageOptions : disadvantageOptions}
                isMulti
                // controlShouldRenderValue = { false }
                onChange={handleChange}  
            />
           {/* <button onClick={createTitleArray}>title</button> */}
        </div>
    );
}
 
export default SearchBar;