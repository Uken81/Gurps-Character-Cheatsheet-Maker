
const SelectedDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;
    const onClick = props.onClick;

    return (
        <ul>
            {selectedDisadvantagesList.map((element, key) => {
                return (
                    <li key={`li-${element.title}`}>
                        <button
                            className='selected-button'
                            key={`${element.title}-selected`}
                            onClick={() => onClick('disAdvantage', element.title)}
                        >
                            {element.title}
                        </button>
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedDisadvantages;