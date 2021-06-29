import React from 'react';

// ------------- STYLES ------------>
import { ImageSingleContainer } from './imageSingle.styles';

// ------------- FUNCTION ------------>
const ImageSingle = ({ imgUrl, alt, ...otherProps }) => {
    return (
        <ImageSingleContainer>
            <img src={imgUrl} alt={alt} />
        </ImageSingleContainer>
    )
}

export default ImageSingle;
