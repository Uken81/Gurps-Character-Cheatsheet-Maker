import { Link } from "react-router-dom";

import './signInButtons.styles.scss';
import '../../../Pages/Home Page/homePage.styles.scss'

export const SignInButton = () => {

    return (
        <div className='nav-link'>
            <Link to='/sign-in-and-sign-up'>SIGN IN</Link>
        </div>
    );
}

export const BackToLandingPage = () => {
    return (
        <div className="nav-link">
            <Link to='/' >BACK</Link>
        </div>
    )
}

export const BackToCreateManage = () => {
    return (
        <div className="nav-link">
            <Link to='/create-or-manage-page' >BACK</Link>
        </div>
    )
}

export const ToEditCharacter = () => {
    return (
        <div className="button-container">
            <button className="tool-button"><Link to='/edit-character-page' >Edit Character</Link></button>
        </div>
    )
}