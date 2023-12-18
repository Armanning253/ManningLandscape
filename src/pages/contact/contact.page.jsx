import React from 'react'

// ------------- COMPONENTS ------------>
import Banner from '../../components/banner/banner.component';
import Hero from '../../components/hero/hero.component';
import InfoBanner from '../../components/infoBanner/infoBanner.component';
import ContactForm from '../../components/contact-form/contactForm.component';
// ------------- HERO IMAGE ------------>
import heroImg from '../../images/manningScape1.jpg';
// ------------- STYLES ------------>
import { ContactContainer } from './contact.styles';

// ------------- FUNCTION ------------>
const Contact = () => {

    return (
        <ContactContainer>
            <Hero hero={heroImg}>
                <Banner title="Hire Us" subTitle="Bring your vision to life"></Banner>
            </Hero>
            <InfoBanner />

            <ContactForm />

        </ContactContainer>
    )
}

export default Contact;