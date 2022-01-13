import { useState } from 'react';

import './ResetPage.styles.scss';

import { Alert, Button, Form } from 'react-bootstrap';
import { ResetPassword } from '../../Components/Firebase/firebase.utils';
import { useNavigate } from 'react-router';

const ResetPasswordPage = () => {
  const [newEmail, setNewEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setNewEmail(event.target.value);
  };

  const sendPasswordReset = () => {
    ResetPassword(newEmail);
  };

  const handleSubmit = (e) => {
    if (newEmail === '') {
      e.preventDefault();
      setShowAlert(true);
    } else {
      e.preventDefault();
      setEmailSent(true);
      sendPasswordReset();
    }
  };

  const navigate = useNavigate();
  const backToSignIn = () => {
    navigate('/sign-in-and-sign-up');
  };

  if (!emailSent) {
    return (
      <div className="reset-password-page">
        <div className="main-container">
          <div className="alert-container">
            {showAlert && <Alert variant="warning">Please enter a valid email</Alert>}
          </div>
          <h3>To reset your password, enter the email address you use to sign in.</h3>
          <div className="form-container">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="email-reset-form" controlId="email-reset">
                <Form.Control
                  type="email-reset"
                  name="email-reset"
                  value={newEmail}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Get reset link
              </Button>
            </Form>
          </div>
          <p className="link-back" onClick={backToSignIn}>
            Take me back to login
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="reset-password-page">
        <div className="main-container">
          <h1>Check your email</h1>
          <div className="message-container">
            <p>{`Check your ${newEmail} inbox for instructions on how to reset your password.`}</p>
            <p className="link-back" onClick={backToSignIn}>
              Take me back to login
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ResetPasswordPage;
