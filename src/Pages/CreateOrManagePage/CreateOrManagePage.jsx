import { onAuthStateChanged } from '@firebase/auth';
import { useContext } from 'react';
import { useEffect } from 'react';

import '../page.styles.scss';

import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../Components/Firebase/firebase.utils';
import Header from '../../Components/Header/Header.component';
import LoadCharacter from '../../Components/Toolbar/LoadCharacter/LoadCharacter';
import { UserContext } from '../../context';
import useResetAttributesOnLoad from '../../Components/SharedComponents/ResetAttributes';

const CreateOrManage = () => {
  const { user, setUser } = useContext(UserContext);

  useResetAttributesOnLoad();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('useeffect');
    console.log('user: ', user);
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      console.log('user: ', user);
      console.log('auth.currentUser.uid: ', auth.currentUser.uid);
      console.log('userAuth.uid: ', userAuth.uid);
      await createUserProfileDocument(userAuth);
      console.log('user2: ', user);

      if (userAuth) {
        setUser(userAuth);
        console.log('****User: ', userAuth);
      } else {
        setUser(userAuth);
        console.log('User has logged out');
        navigate('/');
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [user]);

  return (
    <div className="create-or-manage-characters">
      <Header />
      <div className="user-interface-window">
        <div className="launching-page-options">
          <h1 className="main-title"> G.C.C.M </h1>
          <div className="links">
            <Link to="/create-new-character-page">
              <Button size="lg" variant="outline-primary">
                Create New Character
              </Button>
            </Link>
            <LoadCharacter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrManage;
