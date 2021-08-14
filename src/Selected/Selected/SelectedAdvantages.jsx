const SelectedAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;

    return (
        <ul>
            {selectedAdvantagesList.map(({title}) => {
                return (
                    <li
                        className='selected'
                        key={`${title}-selected`}
                    >
                        {title}
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedAdvantages;