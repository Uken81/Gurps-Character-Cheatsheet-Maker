const SelectedAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;

    return (
        <ul>
            {selectedAdvantagesList.map(({ title }) => {
                return (
                    <li
                        className='selected-advantages'
                        key={`${title}-selected`}
                        style={{color: 'seagreen'}}
                    >
                        {title}
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedAdvantages;