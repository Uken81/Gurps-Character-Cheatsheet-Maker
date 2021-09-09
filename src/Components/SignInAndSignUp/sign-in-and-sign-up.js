import { Link } from "react-router-dom";

import SignIn from "./SignIn/sign-in-component";

import './sign-in-and-sign-up.scss';
import { BackFromSignIN } from "./signinButtons";
import Header from "../Header/Header.component";


const signInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <Header />
           <div className='forms'>
           <SignIn />
           </div>
            
        {/* <Signup /> */}
    </div>
)
 
export default signInAndSignUp;