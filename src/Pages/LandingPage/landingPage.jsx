import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const LandingPage = () => {



    return (  
        <div className="landingPage">
            <h1 className="main-title"> G.C.C.M </h1>
            <Link to='/sign-in-and-sign-up'><Button variant="outline-primary">Log-in/Sign-up</Button>{' '}</Link>
            <Link to='/guest-page'><Button variant="outline-primary">Continue as Guest</Button>{' '}</Link>

        </div>
    );
}
 
export default LandingPage;