import styled, { keyframes } from 'styled-components';

const moveInLeft = keyframes`
    0% {opacity: 0;
        transform: translateX(-100px); }

    80% {transform: translateX(10px); }

    100%{opacity: 100%;
        transform: translateX(0); }
`;

const moveInRight = keyframes`
    0%{ opacity: 0; 
        transform: translateX(100px)}
    80%{ transform: translateX(-10px)}
    100%{ opacity: 100%;
        transform: translateX(0)}
`;

export const BannerContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width:100%;
    height: auto;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};
`;

export const BannerTitle = styled.h1`
    margin: 1rem auto;
    font-size: clamp(1.5rem, 3vw, 4rem);
    font-weight: 600;
    letter-spacing: .75vw;
    text-transform: uppercase;
    text-align: center;
    animation: ${moveInLeft} 1.5s ease-in-out;
`;

export const BannerSubTitle = styled.p`
    margin: auto;
    font-size: clamp(1rem, 2vw, 3rem);
    font-weight: 200;
    letter-spacing: .4vw;
    line-height: 2.5rem;
    text-align: center;
    animation: ${moveInRight} 1.5s ease-in-out;
`;

