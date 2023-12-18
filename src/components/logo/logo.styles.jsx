import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
    display: inline-block;
    text-transform: uppercase;
    height: 100%;
    width: 200px;
    padding: .5rem;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: .2vw;
    line-height: 1.4rem; 
    color: forestgreen;

    span {
        color:${props => props.theme.colors.accent};
        padding: 0 .4rem;
    }
    `;