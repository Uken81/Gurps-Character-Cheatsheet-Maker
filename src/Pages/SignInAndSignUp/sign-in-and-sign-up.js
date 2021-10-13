import './sign-in-and-sign-up.scss';

import Header from "../../Components/Header/Header.component";
import SignIn from "../../Components/SignInAndSignUp/SignIn/sign-in-component.jsx";
import SignUp from "../../Components/SignInAndSignUp/SignUp/sign-up-component.jsx";

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