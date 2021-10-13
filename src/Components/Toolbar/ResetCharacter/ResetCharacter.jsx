const ResetCharacter = (props) => {
    const setSelectInputValue = props.setSelectInputValue;
    const setCharacterName = props.setCharacterName;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const handleClick = () => {
        setSelectInputValue([]);
        setCharacterName('');
        setSelectedAdvantagesList([]);
        setSelectedDisadvantagesList([]);
    }

    return (
        <div className="button-container">
            <button className="tool-button" onClick={handleClick}>Reset Character</button>
        </div>
    );
}

export default ResetCharacter;