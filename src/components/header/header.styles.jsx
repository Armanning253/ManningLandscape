import styled from 'styled-components';


export const HeaderContainer = styled.nav`
    position: fixed;
    z-index: 2;
    height: 7vh;
    width: 100%;
    min-height: 4rem;
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
    `;

export const ClickMenu = styled.div`
    padding: 1rem;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text};

    @media(min-width: 850px) {
        display: none;
    }
    `;

