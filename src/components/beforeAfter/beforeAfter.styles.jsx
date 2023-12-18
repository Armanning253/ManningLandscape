import styled from 'styled-components';

export const BeforeAfterContainer = styled.div`
    display: flex;
    gap: 1.5vw;
    height: 33%;
    width: min( 100%, 1000px);
    margin: 5% auto;
    padding: 6vh 2vw;
    background-color: ${props => props.theme.colors.light};
    border-radius: 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;

export const Discription = styled.div`
    display: flex;
    justify-content: center;
    padding: .25vw;
    h3{
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: .2vw;
        font-size: clamp(.8rem, 2vw, 3rem);
        color: ${props => props.theme.colors.text};
    }
`;