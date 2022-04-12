import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './navigationLinks.styles.scss';

export const BackToSignIn = () => {
  return (
    <div className="nav-link">
      <Link to="/sign-in-and-sign-up">SIGN IN</Link>
    </div>
  );
};

export const BackToLandingPage = () => {
  return (
    <div className="nav-link">
      <Link to="/">BACK</Link>
    </div>
  );
};

export const BackToCreateManage = () => {
  return (
    <div className="nav-link">
      <Link to="/create-or-manage-page">BACK</Link>
    </div>
  );
};

export const ToEditCharacter = () => {
  return (
    <div className="button-container">
      <Button className="tool-button">
        <Link to="/edit-character-page" style={{ color: 'black', textDecoration: 'none' }}>
          Edit Character
        </Link>
      </Button>
    </div>
  );
};
