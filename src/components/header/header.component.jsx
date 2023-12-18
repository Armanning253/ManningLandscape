import React, { useState } from 'react';

// ------------ COMPONENTS -------------
import Logo from '../logo/logo.component';
import Navbar from '../navbar/navbar.component';
import Dropdown from '../dropdown/dropdown.component';
// ------- ICONS -------------
import * as faAsm from "react-icons/fa";
// ---------- STYLES -------------
import {
    ClickMenu,
    HeaderContainer,
} from './header.styles';

// -----------------------------------
const Header = () => {
    // <------- State ------------->
    const [open, setOpen] = useState(false);
    // <------- HELPER FUNCTIONS ------------->
    const toggleOpen = () => { setOpen(!open) };
    // <------- VARIABLES ------------->
    const menuIcon = <faAsm.FaBars />;
    // <------- RETURN JSX ------------->
    return (
        <HeaderContainer >
            <Logo />

            {!open && <Navbar dropdown={!open} />}
            {/* state.Open=false/true: LARGE NavContainer-row/column & SMALL Display-none */}

            <ClickMenu onClick={toggleOpen}>
                {open ? <Dropdown slide={open} /> : menuIcon}
            </ClickMenu>

        </HeaderContainer >


    )
}

export default Header;

