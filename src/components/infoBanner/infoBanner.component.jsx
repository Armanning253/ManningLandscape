import React from 'react';

// ------- ICONS -------------
import * as faAsm from "react-icons/fa";

// ------- STYLES -------------
import {
    InfoBannerContainer,
    InfoTitle,
    InfoParagraph,
    IconContainer,
    Facebook, Email, Phone
} from './infoBanner.styles';

const InfoBanner = () => {

    // ------- VARIABLES -------------
    const phone = <faAsm.FaMobileAlt />;
    const email = <faAsm.FaEnvelope />;
    const facebook = <faAsm.FaFacebook />;
    return (
        <InfoBannerContainer>

            <InfoTitle>What We can Do for you</InfoTitle>
            <IconContainer>
                <Phone>{phone}</Phone>
                <Email>{email}</Email>
                <Facebook>{facebook}</Facebook>
            </IconContainer>

            <InfoParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas assumenda officia officiis dolores, ea omnis, eum nemo repellat repudiandae rerum nihil neque, sed consequatur!</InfoParagraph>

        </InfoBannerContainer>
    )
}

export default InfoBanner;
