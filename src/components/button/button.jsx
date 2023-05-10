import './button.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in button-container',
    inverted: 'inverted button-container',
    basic: 'button-container'
}

const Button = ({ children, buttonType, ...otherProps}) => {

    return (
        <button className={buttonType ? BUTTON_TYPE_CLASSES[buttonType] : BUTTON_TYPE_CLASSES["basic"]} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;