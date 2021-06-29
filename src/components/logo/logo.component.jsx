import React from 'react'

// ------- ICONS -------------
import * as gameIc from "react-icons/gi";

// ------- STYLES ------------
import { LogoContainer } from './logo.styles';

const Logo = () => {
    return (
        <LogoContainer to="/">
            <gameIc.GiZigzagLeaf />
            <span>Manning Landscape</span>
        </LogoContainer>
    )
}

export default Logo;
