import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    width: min(90%, 1000px);
    height: auto;
    margin: 6vh auto;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.light};
    padding: 1rem;
    box-shadow: 3px 3px 10px #111;
    overflow: hidden;
`;

export const CardDiscription = styled.div`
    color: ${props => props.theme.colors.text};
    margin: 1rem 1rem 0;
    display: flex;
    flex: 1 1 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardTitle = styled.h2`
    text-align: center;
    font-size: clamp(1.25rem, 2vw, 2rem);
    line-height: 2rem;
    letter-spacing: 0.3vw;
    font-weight: 200;
    margin-bottom: 1.25rem;
`;

export const CardParagraph = styled.p`
    font-size: clamp(0.75rem, 1.5vw, 1.5rem);
    line-height: min(4vh, 2rem);
    letter-spacing: 0.1rem;
    text-align: center;
    margin: 0 0.75rem 2rem;
    max-width: 80%;
`;

export const CardButton = styled(Link)`
    background: ${props => props.theme.colors.main};
    color: ${props => props.theme.colors.text};
    font-size: clamp(0.9rem, 1.5vw, 1.5rem);
    font-weight: 200;
    padding: 0.5rem 1.5rem;
    width: fit-content;
    margin: 1rem;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 2px 8px black;
    &:hover{
        background-color: ${props => props.theme.colors.accentLight};
        color: ${props => props.theme.colors.textDark};
        cursor: pointer;
    }
    &:active{
        transform: translateY(2px);
        box-shadow: none;
    }
`;


export const CardImageContainer = styled.img`
    /* margin: auto; */
    /* height: auto; */
    height: 250px;
    background-color: whitesmoke; //* temperary height and color */
    width: min(350px, 100%); 
    flex: 1 1 45%;
    border-radius: 25px;
    transition: transform 1.5s ;

    &:hover  {
        transform: scale(1.05);
    }
`;




