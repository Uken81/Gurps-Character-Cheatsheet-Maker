const SelectedAdvantages = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList

    return (  
        <ul>
           {selectedAdvantagesList.map((element) => {
               return (
                   <li key={`${element.title}-selected`}>{element.title}</li>
               )
           })} 
        </ul>
    );
}
 
export default SelectedAdvantages;