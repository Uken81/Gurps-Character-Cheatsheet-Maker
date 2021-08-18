import { useEffect } from "react";

import './Toggle.styles.css';

const ToggleAdvantageDisadvantage = (props) => {
    const isChoosingAdvantages = props.isChoosingAdvantages;
    const setIsChoosingAdvantages = props.setIsChoosingAdvantages;

    const advantageButton = document.getElementById('toggle-advantage');
    const disadvantageButton = document.getElementById('toggle-disadvantage');

    useEffect(() => {
        if (advantageButton !== null && isChoosingAdvantages) {
            advantageButton.style.backgroundColor = 'whitesmoke';
            disadvantageButton.style.backgroundColor = 'darkgray';
        } else if (disadvantageButton !== null && !isChoosingAdvantages) {
            disadvantageButton.style.backgroundColor = 'whitesmoke';
            advantageButton.style.backgroundColor = 'darkgray';
        }
    }, [advantageButton, disadvantageButton, isChoosingAdvantages]);

    return (
        <div className='toggle-window'>
            <div className='toggle-advantage-section'>
                <p>Choose from</p>
                <button
                    className='toggle-buttons'
                    id='toggle-advantage'
                    onClick={() => setIsChoosingAdvantages(true)}>
                    Advantages
                </button >
            </div>
            <div className='toggle-disadvantage-section'>
                <p>Choose from</p>
                <button
                    className='toggle-buttons'
                    id='toggle-disadvantage'
                    onClick={() => setIsChoosingAdvantages(false)}>
                    Disadvantages
                </button>
            </div>

        </div>
    );
}

export default ToggleAdvantageDisadvantage;