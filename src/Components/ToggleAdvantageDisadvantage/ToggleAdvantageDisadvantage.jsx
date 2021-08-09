const ToggleAdvantageDisadvantage = (props) => {
    const setIsChoosingAdvantages = props.setIsChoosingAdvantages;

    return (
        <div className='toggle'>
            <button className='toggle-button' autoFocus onClick={()=> setIsChoosingAdvantages(true)}>Advantages</button>
            <button className='toggle-button' onClick={()=> setIsChoosingAdvantages(false)}>Disadvantages</button>
        </div>
    );
}

export default ToggleAdvantageDisadvantage;