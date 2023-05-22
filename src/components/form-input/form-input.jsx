import {FormInputLabel, Group, Input} from "./forn-input.style";

const FormInput = ({label, ...otherProps}) => {

    return (
        <Group>
            <Input {...otherProps}/>
            {label &&
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
        </Group>
    );
}

export default FormInput;