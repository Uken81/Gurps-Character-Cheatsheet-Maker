import { useEffect } from 'react';
import { useContext } from 'react';

import '../page.styles.scss';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {
  CharacterNameContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext
} from '../../context';

const LandingPage = () => {
  const { setCharacterName } = useContext(CharacterNameContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);

  useEffect(() => {
    const resetAttributes = () => {
      setCharacterName('');
      setSelectedAdvantagesList([]);
      setSelectedDisadvantagesList([]);
    };
    resetAttributes();
  }, []);

  return (
    <div className="landingPage">
      <div className="user-interface-window">
        <div className="launching-page-options">
          <h1 className="main-title"> G.C.C.M </h1>
          <div className="links">
            <Link to="/sign-in-and-sign-up">
              <Button size="lg">Log-in/Sign-up</Button>
            </Link>
            <Link to="/guest-page">
              <Button size="lg" variant="outline-primary">
                Continue as Guest
              </Button>{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
