import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from '@restart/ui/esm/DropdownItem';
import { getMatchingCharactersForUser, getUsersCharactersList } from '../Firebase/firebase.utils';
import { useEffect, useState } from 'react';

import AdvantagesArray from "../../Attribute Objects/Advantages/Advantages";
import DisadvantagesArray from "../../Attribute Objects/Disadvantages/Disadvantages";

const LoadCharacter = (props) => {
    const currentUser = props.currentUser;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const [dropdownList, setDropdownList] = useState([]);
    const [characterToLoad, setCharacterToLoad] = useState('');

    useEffect(() => {
        console.log('list');
        const mapUsersCharacterList = async () => {
            if (currentUser) {
                let tempArr = []
                const record = await getUsersCharactersList(currentUser.uid);
                record.forEach(element => {
                    tempArr.push(element);
                })
                setDropdownList(tempArr)
                // return tempArr;
            }
        }
        mapUsersCharacterList();
    }, [currentUser]);

    const handleClick = (character) => {
        setCharacterToLoad(character);
        console.log(characterToLoad);
    }
    let records;
    const getRecord = async (character) => {
        character = characterToLoad;
        if (characterToLoad !== '') {
            records = await getMatchingCharactersForUser(currentUser.uid, character);
            console.log("records: ", records);
        }
        return records;
    }


    const repopulateCharacterAttributes = async () => {
        const newRecord = await getRecord();
        if (characterToLoad !== '') {
            const characterName = newRecord.map((item) => item.name);
            console.log('character name: ' + characterName);
        }


        const advantagesRecord = newRecord.flatMap((item) => item.advantages);
        const characterAdvantages = AdvantagesArray.filter((advantage) => advantagesRecord.includes(advantage.title));

        const disadvantagesRecord = newRecord.flatMap((item) => item.disadvantages);
        const characterDisadvantages = DisadvantagesArray.filter((disadvantage) => disadvantagesRecord.includes(disadvantage.title));

        setSelectedAdvantagesList(characterAdvantages);
        setSelectedDisadvantagesList(characterDisadvantages);


        console.log('character advantages' + JSON.stringify(characterAdvantages));
        console.log('character disadvantages' + characterDisadvantages);

    }

    useEffect(() => {
        const loadSelectedCharactersStats = async () => {
            if (characterToLoad !== '') {
                console.log('rec');
                console.log(characterToLoad)
                await getRecord(characterToLoad);
                await repopulateCharacterAttributes();
            }

        }
        loadSelectedCharactersStats();

    }, [characterToLoad])



    const con = () => {

        console.log(characterToLoad);
    }


    return (
        <DropdownButton align="end" id="dropdown-item-button" title="LOAD CHARACTER">
            {dropdownList !== [] && dropdownList.map(character => (
                <DropdownItem
                    key={dropdownList.indexOf(character)}
                    onClick={() => handleClick(character)}
                >
                    {character}
                </DropdownItem>
            ))}
            {/* <button onClick={rec}>rec</button> */}
            <button onClick={con}>con</button>
        </DropdownButton>
    );
}

export default LoadCharacter;