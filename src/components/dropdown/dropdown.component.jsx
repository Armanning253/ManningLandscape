import React from 'react'

// ------- COMPONENTS ------------
import Navbar from '../navbar/navbar.component';

// ----------- ICONS ----------------
import * as faAsm from "react-icons/fa";

// -------STYLES --------------
import { DropdownContainer, SlideContainer } from './dropdown.styles';

const Dropdown = ({ slide }) => {
    return (
        <DropdownContainer slide={slide} >
            <SlideContainer slide={slide}>
                <faAsm.FaTimes />
                <Navbar />
            </SlideContainer>
        </DropdownContainer >
    )
}

export default Dropdown;
