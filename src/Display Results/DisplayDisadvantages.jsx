const DisplayDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (
        <div>
            {selectedDisadvantagesList.length >0 && <h3>Disadvantages</h3>}
            {selectedDisadvantagesList.map(({title, points, description, subCategories, extraText}) => {
                return (
                    <div className='results-container' key={`${title}-container`}>
                        <h2>{title}</h2>
                        <p className='points'><strong>{points}</strong></p>
                        <p>{description}</p>
                        {subCategories && subCategories.map(({name, text, points}) => {
                            return (
                                <div className='sub-category' key={`${name}-container`}>
                                    <p><strong>{name}</strong></p>
                                    <p>{text}</p>
                                    <p><strong>{points}</strong></p>
                                </div>
                            )
                        })}
                        <i>{extraText}</i>
                    </div>
                )
            })}
        </div>

    );
}

export default DisplayDisadvantages;