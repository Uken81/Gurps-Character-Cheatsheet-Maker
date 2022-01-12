import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.utils';
import { BackToCreateManage, BackToLandingPage } from './Navigation Links/navigationLinks';

import './header.styles.scss';

import { useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../context';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user } = useContext(UserContext);

  const [pathname, setPathName] = useState('');

  const location = useLocation();

  useEffect(() => {
    const setPath = () => {
      setPathName(location.pathname);
    };
    setPath();
  }, []);

  const navigate = useNavigate();
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log(user.email + ' signed out');
        navigate('/');
      })
      .catch((error) => {
        console.log('error signing out user', error.message);
      });
  };

  return (
    <div className="header">
      {['/sign-in-and-sign-up', '/guest-page'].includes(pathname) ? <BackToLandingPage /> : null}
      {['/create-new-character-page', '/manage-characters-page', '/edit-character-page'].includes(
        pathname
      ) ? (
        <BackToCreateManage />
      ) : null}
      {user && <button id="sign-out" onClick={signout}></button>}
    </div>
  );
};

export default Header;
