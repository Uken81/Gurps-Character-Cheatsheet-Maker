const DisplayAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;

    return (
        <div>
            {selectedAdvantagesList.length > 0 && <h3>Advantages</h3>}
            {selectedAdvantagesList.map((obj) => {
                return (
                    <div className='results-container' key={`${obj.title}-container`}>
                        <h2>{obj.title}</h2>
                        <p className='points'>{obj.points}</p>
                        {obj.description}
                        {obj.subCategories && obj.subCategories.map((sub) => {
                            return (
                                <div className='sub-category' key={`${sub.name}-container`}>
                                    <strong><p>{sub.name}</p></strong>
                                    {sub.text}
                                    <p>{sub.points}</p>
                                </div>
                            )
                        })}
                        <i>{obj.extraText}</i>
                    </div>
                )
            })}
        </div>
    );
}

export default DisplayAdvantages;