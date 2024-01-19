import styled, { keyframes } from 'styled-components';

const slideOpen = keyframes`
    from { transform: translatey(-100%); }
    to { transform: translatey(0); }
`;

// ! slide close needs a booleen check if open
// const slideClose = keyframes`
//     from { transform: translatey(0); }
//     to { transform: translatey(-100%); }
// `;



export const DropdownContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    color: white; 
    z-index: 3; 
   
`;

export const SlideContainer = styled.div`
    
    background-color: ${props => props.theme.colors.dark};
    padding: 1rem;
    animation: ${slideOpen} .75s ease-in-out;
    height: 100vh;
    text-align: right;
`;



