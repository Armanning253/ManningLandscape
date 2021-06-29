import React, { useState } from 'react'

// ------------- COMPONENTS ------------>
import FormInput from '../../components/form-input/form-input.component';
// ------------- STYLES ------------>
import { ContactFormContainer, ContactFormButton, ContactTextBox } from './contactForm.styles';

// ------------- FUNCTION ------------>
const ContactForm = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(''); setFName(''); setLName(''); setEmail(''); setPhone('')
    };
    return (
        <ContactFormContainer>
            <span> Contact us to get a quote</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    id="fname"
                    name="fname"
                    type="text"
                    value={fname}
                    handleChange={e => setFName(e.value)}
                    label="First Name"
                    require
                />
                <FormInput
                    id="lname"
                    name="lname"
                    type="text"
                    value={lname}
                    onChange={e => setLName(e.value)}
                    label="Last Name"
                    require
                />
                <FormInput
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.value)}
                    label="email"
                    require
                />
                <FormInput
                    id="phone"
                    name="phone"
                    type="phone"
                    value={phone}
                    onChange={e => setPhone(e.value)}
                    label="phone"
                />
                <ContactTextBox
                    id="message"
                    name="message"
                    row="10"
                    column="30"
                    value={message}
                    onChange={e => setMessage(e.value)}
                >

                </ContactTextBox>
                <ContactFormButton type="submit" value="Submit Form" />
            </form>
        </ContactFormContainer>
    )
}

export default ContactForm;
