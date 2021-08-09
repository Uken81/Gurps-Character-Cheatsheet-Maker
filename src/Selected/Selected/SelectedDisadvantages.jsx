const SelectedDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
        <ul>
            {selectedDisadvantagesList.map((element, key) => {
                return (
                    <li
                        className='selected'
                        key={`${element.title}-selected`}
                    >
                        {element.title}
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedDisadvantages;