const ToggleAdvantageDisadvantage = (props) => {
    const isAdvantage = props.isAdvantage;
    const setIsAdvantage = props.setIsAdvantage;

    return (
        <div>
            <button onClick={()=> setIsAdvantage(true)}>Advantages</button>
            <button onClick={()=> setIsAdvantage(false)}>Disadvantages</button>
        </div>
    );
}

export default ToggleAdvantageDisadvantage;