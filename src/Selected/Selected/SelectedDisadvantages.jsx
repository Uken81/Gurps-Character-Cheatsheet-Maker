
const SelectedDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (  
        <ul>
           {selectedDisadvantagesList.map((element, key) => {
               return (
                   <li key={`${element.title}-selected`}>{element.title}</li>
               )
           })} 
        </ul>
    );
}
 
export default SelectedDisadvantages;