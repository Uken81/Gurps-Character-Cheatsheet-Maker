const DisplayAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;


    return (
        <div>
            <h1>Advantages</h1>
            {selectedAdvantagesList.map((obj) => {
                return (
                    <div className='results-container' key={`${obj.title}-container`}>
                        <h2>{obj.title}</h2>
                        <p>{obj.points}</p>
                        <p>{obj.description}</p>
                        {obj.subCategories && obj.subCategories.map((sub) => {
                            return (
                                <div key={`${sub.name}-container`}>
                                    <p>{sub.name}</p>
                                    <p>{sub.text}</p>
                                    <p>{sub.points}</p>
                                </div>
                            )
                        })}
                        <p>{obj.extraText}</p>
                    </div>
                )
            })}
        </div>

    );
}

export default DisplayAdvantages;