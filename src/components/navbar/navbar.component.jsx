import React from 'react'

// ------- ICONS -------------
import * as faAsm from "react-icons/fa";
// --------- STYLES ---------------->
import { NavContainer, NavLink } from './navbar.styles';

// --------- FUNCTION ---------------->
const Navbar = ({ dropdown }) => {
    return (
        <NavContainer dropdown={dropdown}>
            <NavLink to='/ManningLandscape'>
                <span>H<faAsm.FaHome />ME</span>
            </NavLink>
            <NavLink to='/portfolio'><span>portfolio</span></NavLink>
            <NavLink to='/compare'><span>results</span></NavLink>
            <NavLink to='/reviews'><span>About</span></NavLink>
            <NavLink to='/contact'><span>Contact</span></NavLink>
        </NavContainer>
    )
}

export default Navbar;
