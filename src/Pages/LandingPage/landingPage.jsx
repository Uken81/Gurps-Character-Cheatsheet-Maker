import '../page.styles.scss';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import useResetAttributesOnLoad from '../../Components/SharedComponents/ResetAttributes';

const LandingPage = () => {
  useResetAttributesOnLoad();
  console.log('build');

  return (
    <div className="landingPage">
      <div className="user-interface-window">
        <div className="launching-page-options">
          <h1 className="main-title"> G.C.C.M </h1>
          <div className="links">
            <Link to="/sign-in-and-sign-up">
              <Button size="lg" variant="outline-primary">
                Log-in/Sign-up
              </Button>
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
