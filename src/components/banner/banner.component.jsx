import React from 'react'
import { BannerContainer, BannerSubTitle, BannerTitle } from './banner.styles';

const Banner = ({ title, subTitle, children }) => {
    return (
        <BannerContainer>

            <BannerTitle>{title}</BannerTitle>
            <BannerSubTitle> {subTitle} </BannerSubTitle>
            {children}

        </BannerContainer>
    )
}

export default Banner;
