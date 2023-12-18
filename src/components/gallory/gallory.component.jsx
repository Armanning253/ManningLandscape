import React from 'react'

// ---------------- COMPONENTS --------->
import ImageSingle from '../imageSingle/imageSingle.component';
// ---------------- STYLES ------------->
import { GalloryContainer, Title, ImageContainer } from './gallory.styles';

// --------------- FUNCTION ------------>
const Gallory = ({ title, imageGallory, beforeImage }) => {
    return (
        <GalloryContainer>
            <Title>{title}</Title>
            <ImageContainer >
                {imageGallory.map(
                    ({ id, ...otherProps }) => (<ImageSingle key={id} {...otherProps} />)
                )}
            </ImageContainer>

        </GalloryContainer>
    )
}

export default Gallory;


