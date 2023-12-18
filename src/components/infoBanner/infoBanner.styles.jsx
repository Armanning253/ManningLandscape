import styled from 'styled-components';



export const InfoBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25vh;
    background: ${props => props.theme.colors.bg};
    padding: 1rem;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.text};
    padding: 2rem;
`;

export const InfoTitle = styled.h3`
    color:${props => props.theme.colors.text};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: min(3.5vw, 2rem);
    margin-top: 1rem;
`;

export const InfoParagraph = styled.p`
    text-align: center;
    width: min(80vw, 500px);
    margin-bottom: 2rem;
`;

export const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: .5rem;
    color: ${props => props.theme.colors.link};
`;

export const Facebook = styled.div`
    font-size: 1.5rem;
    padding: 0 1rem;
`;
export const Email = styled.div`
    font-size: 1.5rem;
    padding: 0 1rem;

`;
export const Phone = styled.div`
    font-size: 1.5rem;
    padding: 0 1rem;

`;