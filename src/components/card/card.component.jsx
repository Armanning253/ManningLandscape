import React from 'react'

// ------------- STYLES ------------>
import { CardParagraph, CardButton, CardContainer, CardDiscription, CardImageContainer, CardTitle } from './card.styles';

// ------------- FUNCTION ------------>
const Card = ({ projectData }) => {
    const { title, aboutText, buttonText, afterImage, altImg } = projectData;
    return (
        <CardContainer>
            <CardDiscription>
                <CardTitle>{title}</CardTitle>
                <CardParagraph>{aboutText}</CardParagraph>
                <CardButton to='/Portfolio'>{buttonText}</CardButton>
            </CardDiscription>

            <CardImageContainer src={afterImage} alt={altImg} />

        </CardContainer >
    )
}

export default Card;
