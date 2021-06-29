import React from 'react'

// --------------- STYLED COMPONENTS ------------
import { BeforeAfterContainer, ImageContainer, Image, Discription } from './beforeAfter.styles';

const BeforeAfter = ({ before, after }) => {
    return (
        <BeforeAfterContainer>
            <ImageContainer>
                <Image src={before} alt='before' />
                <Discription><h3>Before</h3></Discription>
            </ImageContainer>
            <ImageContainer>
                <Image src={after} alt='after' />
                <Discription><h3>After</h3></Discription>
            </ImageContainer>
        </BeforeAfterContainer>




    )
}

export default BeforeAfter;