import React, { useContext } from 'react'

// --------- COMPONENTS --------
import Hero from '../../components/hero/hero.component';
import Banner from '../../components/banner/banner.component';
import Card from '../../components/card/card.component';
import Contact from '../../pages/contact/contact.page';
import InfoBanner from '../../components/infoBanner/infoBanner.component';
// --------- CONTEXT -------->
import { ProjectContext } from '../../context/projectContext';
// --------- HERO IMAGE -------->
import heroImg from '../../images/manning-landscape-images/stoneWork/3.jpg';
// --------- STYLES --------
import { HomePageContainer } from './home.page.styles';

// ------------- FUNCTION ------------> 
const Homepage = () => {
    const [project, setProject] = useContext(ProjectContext);

    return (
        <HomePageContainer >
            <Hero hero={heroImg}>
                <Banner title="Manning Landscape" subTitle="Creating your outdoor dreams" />
            </Hero>
            <InfoBanner />

            {project.map((project) => (
                <Card key={project.id} projectData={project} />
            ))}

            <Contact />

        </HomePageContainer>
    )
}

export default Homepage
