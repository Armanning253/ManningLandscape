import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    padding: 1rem;
    margin: 1rem;
    background-color: ${props => props.theme.colors.light};
    width: min(90%, 600px);
`;

export const ContactFormButton = styled.input`
    padding: .5rem 1rem;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    &:hover{
    background-color: ${props => props.theme.colors.dark};
    }
`;

export const ContactTextBox = styled.textarea`
    margin: 1rem;
`;