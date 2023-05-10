import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";
import './authorization.scss';

const Authorization = () => {

    return (
        <div className={"authorization-container"}>
            <SignIn/>
            <SignUp/>
        </div>
    );
}

export default Authorization;