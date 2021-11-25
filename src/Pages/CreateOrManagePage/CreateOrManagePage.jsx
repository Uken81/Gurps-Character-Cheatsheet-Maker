import { onAuthStateChanged } from '@firebase/auth';
import { useContext } from 'react';
import { useEffect } from 'react';

import '../page.styles.scss';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../Components/Firebase/firebase.utils';
import Header from '../../Components/Header/Header.component';
import LoadCharacter from '../../Components/Toolbar/LoadCharacter/LoadCharacter';
import {
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  UserContext
} from '../../context';

const CreateOrManage = () => {
  const { user, setUser } = useContext(UserContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);

  useEffect(() => {
    console.log('***Test: createOrManagePage');
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      await createUserProfileDocument(userAuth);
      if (userAuth) {
        setUser(userAuth);
        console.log('OnAuthStateChange/HomePage');
        // console.log(`${userAuth.email} has logged in`);
        console.log('****User: ', user);
      } else {
        setUser(userAuth);
        console.log('User has logged out');
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [user]);

  useEffect(() => {
    const resetAttributes = () => {
      setSelectedAdvantagesList([]);
      setSelectedDisadvantagesList([]);
    };
    resetAttributes();
  }, []);

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
