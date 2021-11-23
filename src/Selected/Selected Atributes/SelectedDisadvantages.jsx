const SelectedDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
        <ul>
            {selectedDisadvantagesList.map(({title}) => {
                return (
                    <li
                        className='selected'
                        key={`${title}-selected`}
                        style={{color: 'brown'}}
                    >
                        {title}
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedDisadvantages;