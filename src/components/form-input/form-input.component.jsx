import React from 'react';

// ----------- STYLES -------------->
import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';
// ----------- FUNCTION -------------->
const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <FormInputLabel>{label}</FormInputLabel>) : null
            }
        </GroupContainer>
    )
}

export default FormInput;


{/* <Message
            id="message"
            name="message"
            rows="8"
            columns="30"
            onChange={e => setMessage(e.value)}
        /> */}