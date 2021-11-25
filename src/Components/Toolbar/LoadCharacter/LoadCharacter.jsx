import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import {
  getMatchingCharactersForUser,
  getUsersCharactersList
} from '../../Firebase/firebase.utils';
import { useEffect, useState } from 'react';

import AdvantagesArray from '../../../Attribute Objects/Advantages/Advantages';
import DisadvantagesArray from '../../../Attribute Objects/Disadvantages/Disadvantages';
import { useContext } from 'react';
import {
  CharacterNameContext,
  CurrentCharacterIdContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  UserContext
} from '../../../context';
import { useHistory, useLocation } from 'react-router';

const LoadCharacter = () => {
  const { user } = useContext(UserContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);
  const { setCurrentCharacterId } = useContext(CurrentCharacterIdContext);
  const { setCharacterName } = useContext(CharacterNameContext);

  const [dropdownList, setDropdownList] = useState([]);
  const [characterToLoad, setCharacterToLoad] = useState('');

  useEffect(() => {
    const mapUsersCharacterList = async () => {
      if (user) {
        let tempArr = [];
        const record = await getUsersCharactersList(user.uid);
        record.forEach((element) => {
          tempArr.push(element);
        });
        setDropdownList(tempArr);
      }
    };
    mapUsersCharacterList();
  }, [user]);

  const handleLoad = (character) => {
    setCharacterToLoad(character);
  };

  let records;
  const getRecord = async (character) => {
    character = characterToLoad;
    if (characterToLoad !== '') {
      records = await getMatchingCharactersForUser(user.uid, character);
    }
    return records;
  };

  const repopulateCharacterAttributes = async () => {
    const newRecord = await getRecord();

    const characterNameRecord = newRecord.flatMap((item) => item.name);
    const characterName = characterNameRecord[0];
    console.log('****Loading ', characterName);

    const advantagesRecord = newRecord.flatMap((item) => item.advantages);
    const characterAdvantages = AdvantagesArray.filter((advantage) =>
      advantagesRecord.includes(advantage.title)
    );

    const disadvantagesRecord = newRecord.flatMap((item) => item.disadvantages);
    const characterDisadvantages = DisadvantagesArray.filter((disadvantage) =>
      disadvantagesRecord.includes(disadvantage.title)
    );

    setSelectedAdvantagesList(characterAdvantages);
    setSelectedDisadvantagesList(characterDisadvantages);
    setCharacterName(characterName);

    console.log(`****${characterName} successfully loaded`);
    console.log('CD: ', characterDisadvantages);
  };

  const repopulateCurrentCharacterId = async () => {
    const newRecord = await getRecord();
    let characterId = '';
    await newRecord.forEach((element) => {
      characterId = element.id;
    });
    console.log('characterId: ', characterId);

    await setCurrentCharacterId(characterId);
  };

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const loadSelectedCharactersStats = async () => {
      if (characterToLoad !== '') {
        console.log('***Test: loadCharacter');
        await getRecord(characterToLoad);
        await repopulateCharacterAttributes();
        await repopulateCurrentCharacterId();

        if (location.pathname === '/create-or-manage-page') {
          history.push('/manage-characters-page');
        }
      }
    };
    loadSelectedCharactersStats();
  }, [characterToLoad]);

  return (
    <div>
      <DropdownButton
        className="dropdown-button"
        id="dropdown-item-button"
        title={`LOAD CHARACTER`}
        variant="outline-primary"
        size="lg"
        // style={{border: '4px solid red'}}
      >
        {dropdownList !== [] &&
          dropdownList.map((character) => (
            <DropdownItem
              className="dropdown-link"
              key={dropdownList.indexOf(character)}
              onClick={() => handleLoad(character)}
              style={{
                color: 'white',
                backgroundColor: 'black',
                // width: '60%',
                fontSize: '1.5rem'
                // borderBottom: '2px solid white'
              }}>
              {character}
            </DropdownItem>
          ))}
      </DropdownButton>
    </div>
  );
};

export default LoadCharacter;
