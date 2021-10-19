const ResetCharacter = (props) => {
    const setSelectInputValue = props.setSelectInputValue;
    const setCharacterName = props.setCharacterName;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const HandleCharacterReset = () => {
        setSelectInputValue([]);
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