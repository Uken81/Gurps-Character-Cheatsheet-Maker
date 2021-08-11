const DisplayAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
console.log(selectedAdvantagesList);

    return (
        <div>
            {selectedAdvantagesList.length >0 && <h1>Advantages</h1>}
            {selectedAdvantagesList.map((obj) => {
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
                        <p><i>{obj.extraText}</i></p>
                    </div>
                )
            })}
        </div>

    );
}

export default DisplayAdvantages;