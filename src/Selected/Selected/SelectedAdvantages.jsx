const SelectedAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList

    return (  
        <ul>
           {selectedAdvantagesList.map((element) => {
               return (
                   <li key={`${element}-selected`}>{element}</li>
               )
           })} 
        </ul>
    );
}
 
export default SelectedAdvantages;