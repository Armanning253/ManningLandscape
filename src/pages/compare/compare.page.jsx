import React, { useContext } from 'react';

// --------------- CONTEXT ----------------->
import { ProjectContext } from '../../context/projectContext';
// --------------- COMPONENTS ----------------->
import Banner from '../../components/banner/banner.component';
import Hero from '../../components/hero/hero.component';
import BeforeAfter from '../../components/beforeAfter/beforeAfter.component';
// --------------- STYLES ------------>
import { CompareContainer } from './compare.styles';

// --------------- FUNCTION -------------------->
const Compare = () => {
    const [project, setProject] = useContext(ProjectContext);
    return (
        <CompareContainer>
            <Hero>
                <Banner title="before and after"></Banner>
            </Hero>

            {project.map((project) => (
                <BeforeAfter key={project.id} before={project.beforeImage} after={project.afterImage} />
            ))}
        </CompareContainer>
    )
}

export default Compare;