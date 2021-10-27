import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const LandingPage = () => (
 
        <div className="landingPage">
            <h1 className="main-title"> G.C.C.M </h1>
            <Link to='/sign-in-and-sign-up'><Button size='lg' >Log-in/Sign-up</Button></Link>
            <Link to='/guest-page'><Button size='lg' variant="outline-primary">Continue as Guest</Button>{' '}</Link>

        </div>
    
);
 
export default LandingPage;