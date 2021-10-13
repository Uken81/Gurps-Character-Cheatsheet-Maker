import { useEffect, useState } from 'react';
import Select from 'react-select';
import AdvantagesArray from '../../Attribute Objects/Advantages/Advantages';
import DisadvantagesArray from '../../Attribute Objects/Disadvantages/Disadvantages';
import ToggleAdvantageDisadvantage from '../ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';

import './SearchBar.styles.scss';

const SearchBar = (props) => {
    const [advantageOptions, setAdvantageOptions] = useState([]);
    const [disadvantageOptions, setDisadvantageOptions] = useState([]);

    const selectInputValue = props.selectInputValue;
    const setSelectInputValue = props.setSelectInputValue;
    const isChoosingAdvantages = props.isChoosingAdvantages;
    const setIsChoosingAdvantages = props.setIsChoosingAdvantages;
    const characterName = props.characterName;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    useEffect(() => {
        const createSearchOptions = () => {
            let adsArr = AdvantagesArray.map(opt => ({ label: opt.title, value: opt, category: opt.type }));
            let disadsArr = DisadvantagesArray.map(opt => ({ label: opt.title, value: opt, category: opt.type }));
            setAdvantageOptions(adsArr);
            setDisadvantageOptions(disadsArr);
        }
        createSearchOptions();
    }, []);

    const handleChange = (event) => {
        setSelectInputValue(event.value)
        let adsArr = [];
        let disadsArr = [];
        console.log(event);
        event.forEach((e) => {
            e.value.type === 'advantage' ? adsArr.push(e.value) : disadsArr.push(e.value);
        });
        setSelectedAdvantagesList(adsArr);
        setSelectedDisadvantagesList(disadsArr);
    }

    const formatOptionLabel = ({ label, category }) => (
        <div style={category === 'advantage' ? { color: 'green' } : { color: 'red', }}>{label}</div>
    );

    return (
        <div className='searchbar-container'>
            {characterName === '' ?
                <h1>Select your Characters {isChoosingAdvantages ? 'Advantages' : 'Disadvantages'}</h1>
                :
                <h1>SELECT {characterName.toUpperCase()}'S {isChoosingAdvantages ? 'Advantages' : 'Disadvantages'}</h1>}
            <ToggleAdvantageDisadvantage
                isChoosingAdvantages={isChoosingAdvantages}
                setIsChoosingAdvantages={setIsChoosingAdvantages}
            />

            <Select
                className='searchBar'
                options={isChoosingAdvantages ? advantageOptions : disadvantageOptions}
                value={selectInputValue}
                isMulti
                onChange={handleChange}
                formatOptionLabel={formatOptionLabel}
            />
        </div>
    );
}

export default SearchBar;