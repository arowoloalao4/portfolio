import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/navbar";
import { useThemeContext } from "../context/themeContext";
import Footer from "../components/footer";
import RepoLinks from "../components/repo/repoLinks";
import RepoIntro from "../components/repo/repoIntro";


const RepositoryPage = () => {

    const { pageTheme } = useThemeContext()

    return (<Container fluid className={`homepage ${pageTheme}`}>

        <NavBar />

        <RepoIntro />

        <RepoLinks />

        <Footer />

    </Container>)
}

export default RepositoryPage