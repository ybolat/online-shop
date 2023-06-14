import {BaseButton, ButtonSpinner, GoogleSignInButton, InvertedButton} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    base: 'base'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    }[buttonType]
)

const Button = ({children, buttonType, isLoading, ...otherProps}) => {

    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    );
}

export default Button;