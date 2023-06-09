import FormInput from "../form-input/form-input";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button";
import {useState} from "react";
import './sign-in.scss';
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const resetAuthorizationForm = () => {
        setEmail("");
        setPassword("");
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetAuthorizationForm();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("No such user");
                    break;
                default:
                    console.log(error);
            }
        }
    }

    return (
        <div className={"sign-in-container"}>
        <h2>Already have an account?</h2>
        <span>Sign in up with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput required label={"Email"} type={"email"} value={email}
                       onChange={(event) => setEmail(event.target.value)}/>
            <FormInput required label={"Password"} type={"password"} value={password}
                       onChange={(event) => setPassword(event.target.value)}/>
            <div className={"buttons-container"}>
                <Button type={"submit"} children={"Sign In"}/>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} type={"button"}
                        children={"Google Sign In"}/>
            </div>
        </form>
    </div>
    );
}

export default SignIn;