import {useState} from "react";
import {createAuthUserWihEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import './sign-up.scss';
import Button from "../button/button";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetRegistrationForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }

        try {
            const response = await createAuthUserWihEmailAndPassword(email, password);
            await createUserDocumentFromAuth(response.user, {"displayName": name});
            resetRegistrationForm();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Account with this email already exist');
            }
            console.log(error);
        }
    }

    return (
        <div className={"sign-up-container"}>
            <h2>Don't have an account?</h2>
            <span>Sign up up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput required label={"Display Name"} type={"text"} value={name}
                           onChange={(event) => setName(event.target.value)}/>
                <FormInput required label={"Email"} type={"email"} value={email}
                           onChange={(event) => setEmail(event.target.value)}/>
                <FormInput required label={"Password"} type={"password"} value={password}
                           onChange={(event) => setPassword(event.target.value)}/>
                <FormInput required label={"Confirm Password"} type={"password"} value={confirmPassword}
                           onChange={(event) => setConfirmPassword(event.target.value)}/>
                <Button type={"submit"} children={"Sign Up"}/>
            </form>
        </div>
    );
}

export default SignUp;