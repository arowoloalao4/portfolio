import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/navbar';
import { useThemeContext } from '../context/themeContext';
import Projects from '../components/project/projects';
import Footer from '../components/footer';
import ProjectIntro from '../components/project/projectIntro';


const ProjectsPage = () => {

    const { pageTheme } = useThemeContext()

    return (<Container fluid className={`homepage ${pageTheme}`}>
        <NavBar />
        <ProjectIntro />
        <Projects />
        <Footer />
    </Container >)
}

export default ProjectsPage