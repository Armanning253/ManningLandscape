import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const NavContainer = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: ${props => !props.dropdown && 'column'};

    @media(max-width: 850px) {
    display: ${props => props.dropdown && 'none'} ;
  }
`;

export const NavLink = styled(Link)`
    color: ${props => props.theme.colors.text};
    display: flex;
    padding-top: 5%;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px dotted ${props => props.theme.colors.light};

    & > * {
        font-size: 1.75vh;
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding: .75rem 1rem;
    }
    

    &:hover {
        transition: font 0.5s ease;
        background-color: ${props => props.theme.colors.light};
        font-size: 1.1rem;
        border-bottom: 1px solid white;
    }
`;