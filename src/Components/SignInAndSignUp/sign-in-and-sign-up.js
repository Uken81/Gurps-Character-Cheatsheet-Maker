import SignIn from "./SignIn/sign-in-component";

import './sign-in-and-sign-up.scss';
import Header from "../Header/Header.component";
import SignUp from "./SignUp/sign-up";


const signInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <Header />
           <div className='forms'>
           <SignIn />
           <SignUp />
           </div>
    </div>
)
 
export default signInAndSignUp;