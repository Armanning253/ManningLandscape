import React, { useContext } from 'react'

// --------- COMPONENTS --------------->
import Banner from '../../components/banner/banner.component';
import Hero from '../../components/hero/hero.component';
import Gallory from '../../components/gallory/gallory.component';
// --------- CONTEXT --------------->
import { ProjectContext } from '../../context/projectContext';
// ------------- STYLES ----------------->
import { PortfolioContainer } from './portfolio.page.styles';

// ------------- FUNCTION ------------>
const Portfolio = () => {
    const [project, setProject] = useContext(ProjectContext);
    return (
        <PortfolioContainer>
            <Hero>
                <Banner title="Portfolio"></Banner>
            </Hero>

            {project.map(({ id, ...otherProps }) => (<Gallory key={id} {...otherProps} />))}

        </PortfolioContainer>
    )
}

export default Portfolio;
