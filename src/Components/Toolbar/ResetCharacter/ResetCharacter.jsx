import { useContext } from "react";
import { CharacterNameContext, SelectedAdvantagesContext, SelectedDisadvantagesContext, SelectInputValueContext } from "../../../context";

const ResetCharacter = () => {
    const {setSelectInput} = useContext(SelectInputValueContext);
    const {setCharacterName} = useContext(CharacterNameContext);
    const {setSelectedAdvantagesList} = useContext(SelectedAdvantagesContext);
    const {setSelectedDisadvantagesList} = useContext(SelectedDisadvantagesContext);

    const HandleCharacterReset = () => {
        setSelectInput([]);
        setCharacterName('');
        setSelectedAdvantagesList([]);
        setSelectedDisadvantagesList([]);
    }

    return (
        <div className="button-container">
            <button className="tool-button" onClick={HandleCharacterReset}>Reset Character</button>
        </div>
    );
}

export default ResetCharacter;