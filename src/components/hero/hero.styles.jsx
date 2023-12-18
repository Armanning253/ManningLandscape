import styled from 'styled-components';


export const HeroContainer = styled.div`
    margin: auto;
    height: 65vh;
    width: 100%;
    display: flex;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    img{
       height: 76vh;
       width: 100%;
    }
`;

export const Overlay = styled.div`
    position: fixed; 
    width: 100%; 
    height: 100%; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
`;
