import './Toggle.styles.css';

const ToggleAdvantageDisadvantage = (props) => {
    const isChoosingAdvantages = props.isChoosingAdvantages;
    const setIsChoosingAdvantages = props.setIsChoosingAdvantages;

    const toggledBackground = { backgroundColor: 'whitesmoke' };
    const untoggledBackground = { backgroundColor: 'darkgray' };

    return (
        <div className='toggle-window'>
            <div className='toggle-advantage-section'>
                <p>CHOOSE FROM</p>
                <button
                    className='toggle-buttons'
                    id='toggle-advantage'
                    style={ isChoosingAdvantages ? toggledBackground : untoggledBackground }
                    onClick={() => setIsChoosingAdvantages(true)}
                >
                    Advantages
                </button >
            </div>
            <div className='toggle-disadvantage-section'>
                <p>CHOOSE FROM</p>
                <button
                    className='toggle-buttons'
                    id='toggle-disadvantage'
                    style={ isChoosingAdvantages ? untoggledBackground : toggledBackground }
                    onClick={() => setIsChoosingAdvantages(false)}
                >
                    Disadvantages
                </button>
            </div>
        </div>
    );
}

export default ToggleAdvantageDisadvantage;