import styled from 'styled-components';

export const GalloryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 2rem auto;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.light};
    height: 100%;
    width: min(90%, 1000px);
    padding: 1rem;
    border-radius: 25px;
`;

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    width: 100%;    
`;

export const Title = styled.h3`
    text-transform: uppercase;
    text-align: center;
    padding: 1.5rem;
    letter-spacing: 1.6px;
    background-color: ${props => props.theme.colors.light}

`;