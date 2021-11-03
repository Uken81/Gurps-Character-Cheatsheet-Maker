import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import Button from "react-bootstrap/Button";
import {
  getMatchingCharactersForUser,
  getUsersCharactersList,
} from "../../Firebase/firebase.utils";
import { useEffect, useState } from "react";

// import "./loadCharacter.styles.scss";

import AdvantagesArray from "../../../Attribute Objects/Advantages/Advantages";
import DisadvantagesArray from "../../../Attribute Objects/Disadvantages/Disadvantages";
import { useContext } from "react";
import {
  CharacterNameContext,
  CurrentCharacterIdContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
  UserContext,
} from "../../../context";
import { useHistory, useLocation } from "react-router";

const LoadCharacter = () => {
  const { user } = useContext(UserContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(
    SelectedDisadvantagesContext
  );
  const { setCurrentCharacterId } = useContext(CurrentCharacterIdContext);
  const { setCharacterName } = useContext(CharacterNameContext);

  const { selectInput, setSelectInput } = useContext(SelectInputValueContext);

  const [dropdownList, setDropdownList] = useState([]);
  const [characterToLoad, setCharacterToLoad] = useState("");

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
  });

  const handleClick = (character) => {
    setCharacterToLoad(character);
  };

  const handleReset = (character) => {
    setCharacterToLoad(character);
    console.log('SI: ', selectInput);
  };

  let records;
  const getRecord = async (character) => {
    character = characterToLoad;
    if (characterToLoad !== "") {
      records = await getMatchingCharactersForUser(user.uid, character);
    }
    return records;
  };

  const repopulateCharacterAttributes = async () => {
    const newRecord = await getRecord();

    const characterNameRecord = newRecord.flatMap((item) => item.name);
    const characterName = characterNameRecord[0];
    console.log("****Loading ", characterName);

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
    console.log('select: ', selectInput);
  };

  const repopulateCurrentCharacterId = async () => {
    const newRecord = await getRecord();
    let characterId = "";
    await newRecord.forEach((element) => {
      characterId = element.id;
    });
    console.log("characterId: ", characterId);

    await setCurrentCharacterId(characterId);
  };

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const loadSelectedCharactersStats = async () => {
      if (characterToLoad !== "") {
        console.log("***Test: loadCharacter");
        await getRecord(characterToLoad);
        await repopulateCharacterAttributes();
        await repopulateCurrentCharacterId();
        if (location.pathname === '/create-or-manage-page') {
          history.push("/manage-characters-page")
        }
      }
    };
    loadSelectedCharactersStats();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterToLoad]);

  return (
    <div>
      {location.pathname === "/create-or-manage-page" ? (
        <DropdownButton
          className="dropdown-button"
          id="dropdown-item-button"
          title={`LOAD CHARACTER`}
        >
          {dropdownList !== [] &&
            dropdownList.map((character) => (
              <DropdownItem
                className="dropdown-link"
                key={dropdownList.indexOf(character)}
                onClick={() => handleClick(character)}
              >
                {character}
              </DropdownItem>
            ))}
        </DropdownButton>
      ) : (
        <Button onClick={() => handleReset("Brendan")} size="lg">
          Reset Changes
        </Button>
      )}
    </div>
  );
};

export default LoadCharacter;
