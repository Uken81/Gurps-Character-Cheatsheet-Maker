import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CurrentCharacterIdContext } from '../../../context';

const ResetChanges = () => {
    const { currentCharacterId } = useContext(CurrentCharacterIdContext);

    const repopulateCharacterAttributes = async () => {

      };
    const handleClick = () => {

    }
    return (  
        <Button onClick={handleClick} size='lg'>Reset Changes</Button>
    );
}
 
export default ResetChanges;