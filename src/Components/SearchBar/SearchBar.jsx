import { useEffect, useState } from 'react';
import Select from 'react-select';
import AdvantagesArray from '../../Attribute Objects/Advantages/Advantages';
import DisadvantagesArray from '../../Attribute Objects/Disadvantages/Disadvantages';

import './SearchBar.styles.css'

const SearchBar = (props) => {
    const [advantageOptions, setAdvantageOptions] = useState([]);
    const [disadvantageOptions, setDisadvantageOptions] = useState([]);

    const isChoosingAdvantages = props.isChoosingAdvantages;
    const characterName = props.characterName;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

   useEffect(()=> {
       const createSearchOptions = () => {
        let adsArr = AdvantagesArray.map(opt => ({ label: opt.title, value: opt, category: opt.type }));
        let disadsArr = DisadvantagesArray.map(opt => ({ label: opt.title, value: opt, category: opt.type }));
        setAdvantageOptions(adsArr);
        setDisadvantageOptions(disadsArr); 
       }
       createSearchOptions();
   },[]);

    
    
    const handleChange = (event) => {
        let adsArr = [];
        let disadsArr = [];
        console.log(event);
        event.forEach((e) => {
            e.value.type === 'advantage' ? adsArr.push(e.value) : disadsArr.push(e.value);    
        });
        setSelectedAdvantagesList(adsArr);
        setSelectedDisadvantagesList(disadsArr);
    }
          
   const formatOptionLabel = ({label, category }) => (
    <div style={category === 'advantage' ? {color: 'green'} : {color: 'red',}}>{label}</div>
);

    return (  
        <div className='searchbar-container'>
           {characterName === '' && 
           <h1>Select your Characters {isChoosingAdvantages ? 'ADVANTAGES' : 'DISADVANTAGES'}</h1>}
           {characterName !== '' && 
           <h1>SELECT {characterName.toUpperCase()}'S {isChoosingAdvantages ? 'ADVANTAGES' : 'DISADVANTAGES'}</h1>}
            <Select
                className='searchBar'
                options={isChoosingAdvantages ? advantageOptions : disadvantageOptions}
                isMulti
                onChange={handleChange} 
                formatOptionLabel={formatOptionLabel}
            />
        </div>
    );
}
 
export default SearchBar;