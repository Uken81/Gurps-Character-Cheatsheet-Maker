import './DisplayResults.styles.css';

const DisplayAdvantages = ({ selectedAdvantagesList }) => (
    <div>
        {selectedAdvantagesList.length > 0 && <h3>Advantages</h3>}
        {selectedAdvantagesList.map(({ title, points, description, subCategories, extraText }) => {
            return (
                <div className='results-container' key={`${title}-container`}>
                    <h2>{title}</h2>
                    <p className='points'><strong>{points}</strong></p>
                    {description}
                    {subCategories && subCategories.map(({ name, text, points }) => {
                        return (
                            <div className='sub-category' key={`${name}-container`}>
                                <strong><p>{name}</p></strong>
                                {text}
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


export default DisplayAdvantages;