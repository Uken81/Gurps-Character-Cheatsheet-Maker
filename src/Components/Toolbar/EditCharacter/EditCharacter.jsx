import { useContext } from "react";
import { useHistory } from "react-router";
import {
  CurrentCharacterIdContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  UserContext,
} from "../../../context";
import {
  GetCharacterReference,
  SaveChangesToCharacter,
} from "../../Firebase/firebase.utils";

const EditCharacter = () => {
  const { user } = useContext(UserContext);
  const { currentCharacterId } = useContext(CurrentCharacterIdContext);
  const { selectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { selectedDisadvantagesList } = useContext(
    SelectedDisadvantagesContext
  );

const history = useHistory();
  const handleEdit = async () => {
    const characterRef = await GetCharacterReference(
      user.uid,
      currentCharacterId
    );
    await SaveChangesToCharacter(
      characterRef,
      selectedAdvantagesList,
      selectedDisadvantagesList
    );
    console.log(characterRef);
    history.push("/create-or-manage-page");
  };

  const con = () => {
    console.log(selectedAdvantagesList);
  };

  return (
    <div className="button-container">
      <button className="tool-button" onClick={handleEdit}>
        Save Changes
      </button>
      <button onClick={con}>con</button>
    </div>
  );
};

export default EditCharacter;
