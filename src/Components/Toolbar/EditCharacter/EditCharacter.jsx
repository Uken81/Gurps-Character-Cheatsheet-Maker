// import { useContext } from "react";
// import { UserContext } from "../../../context";
// import { GetCharacterReference } from "../../Firebase/firebase.utils";

// const EditCharacter = (props) => {
//     const { user } = useContext(UserContext);
//     const currentCharacterId = props.currentCharacterId;
//     const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
//     const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

//     const handleEdit = ()=> {       
//         const characterRef = GetCharacterReference(user.uid, currentCharacterId);
//     }

//     return (  
// <div className='button-container'>
//             <button className="tool-button" onClick={handleEdit}>Delete Character</button>
//         </div>
//     );
// }
 
// export default EditCharacter;