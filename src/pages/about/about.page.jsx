import React from 'react'
// ------------- COMPONENTS ------------>
import Banner from '../../components/banner/banner.component';
import Hero from '../../components/hero/hero.component';
// ------------- SYTLES ------------>
import { AboutContainer } from './about.styles';


// ------------- FUNCTION ------------>
const About = () => {
    return (
        <AboutContainer>
            <Hero>
                <Banner title="about"></Banner>
            </Hero>
        </AboutContainer>
    )
}

export default About;