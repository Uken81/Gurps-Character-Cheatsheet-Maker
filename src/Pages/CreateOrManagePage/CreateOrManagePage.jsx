import { onAuthStateChanged } from '@firebase/auth';
import { useContext } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from '../../Components/Firebase/firebase.utils';
import Header from '../../Components/Header/Header.component';
import { UserContext } from '../../context';

const CreateOrManage = () => {
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
          await createUserProfileDocument(userAuth);
          if (userAuth) {
            setUser(userAuth);
            console.log('OnAuthStateChange/HomePage')
            console.log(`${userAuth.email} has logged in`);
            console.log('****User: ', user)
          } else {
            setUser(userAuth);
            console.log("User has logged out");
          }
          return () => {
            unsubscribeFromAuth();
          };
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user]);
    return (
        <div className="manageCharacters">
            <Header />
            <h1 className="main-title"> G.C.C.M </h1>
            <Link to='/create-new-character-page'><Button  size='lg' variant="outline-primary">Create New Character</Button></Link>
            <Link to='/guest-page'><Button size='lg' variant="outline-primary">Manage Characters</Button></Link>
        </div>
    );
}

export default CreateOrManage;