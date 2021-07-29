
const SelectedDisadvantages = (props) => {
    const selectedDisadvantagesList = props.selectedDisadvantagesList;

    return (  
        <ul>
           {selectedDisadvantagesList.map((element, key) => {
               return (
                   <li key={`${element}-selected`}>{element}</li>
               )
           })} 
        </ul>
    );
}
 
export default SelectedDisadvantages;