import React from 'react'

// ------------ STYLES --------=-->
import { HeroContainer, Overlay } from './hero.styles';

//------------ FUNCTION ----------->
const Hero = ({ hero, children }) => {
    return (

        <HeroContainer id="home" >
            <Overlay />
            <img src={hero} alt='landscape' />
            {children}
        </HeroContainer>

    )
}

export default Hero;
