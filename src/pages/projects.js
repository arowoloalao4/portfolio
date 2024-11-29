import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/navbar';
import { useThemeContext } from '../context/themeContext';
import Projects from '../components/project/projects';
import Footer from '../components/footer';
import Header from '../components/header';


const ProjectsPage = () => {

    const { pageTheme } = useThemeContext()
    const h2 = `My projects`
    const p = `Highlights from my projects`

    return (<Container fluid className={`homepage ${pageTheme}`}>
        <NavBar />
        <Header h2={h2} p={p} />
        <Projects />
        <Footer />
    </Container >)
}

export default ProjectsPage