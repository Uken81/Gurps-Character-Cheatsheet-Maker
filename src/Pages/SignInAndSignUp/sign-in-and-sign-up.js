import './sign-in-and-sign-up';

import Header from "../../Components/Header/Header.component";
import SignIn from "../../Components/SignIn/sign-in-component";
import SignUp from "../../Components/SignUp/sign-up";

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