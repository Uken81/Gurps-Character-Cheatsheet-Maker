const SelectedAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const onClick = props.onClick;

    const sal = ()=> {
        console.log(selectedAdvantagesList);
    }

    return (
        <ul>
            {selectedAdvantagesList.map((element, key) => {
                return (
                    <li key={`li-${element.title}`}>
                        <button
                            className='selected-button'
                            key={`${element.title}-selected`}
                            onClick={()=> onClick('advantage', element.title)}
                            >
                            {element.title}
                        </button>
                    </li>
                )
            })}
        </ul>
    );
}

export default SelectedAdvantages;