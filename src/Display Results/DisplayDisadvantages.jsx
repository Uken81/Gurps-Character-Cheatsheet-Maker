const DisplayDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
        <div>
            {selectedDisadvantagesList.length >0 && <h3>Disadvantages</h3>}
            {selectedDisadvantagesList.map((obj) => {
                return (
                    <div className='results-container' key={`${obj.title}-container`}>
                        <h2>{obj.title}</h2>
                        <p className='points'><strong>{obj.points}</strong></p>
                        <p>{obj.description}</p>
                        {obj.subCategories && obj.subCategories.map((sub) => {
                            return (
                                <div className='sub-category' key={`${sub.name}-container`}>
                                    <p><strong>{sub.name}</strong></p>
                                    <p>{sub.text}</p>
                                    <p><strong>{sub.points}</strong></p>
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

export default DisplayDisadvantages;