import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../components/navbar";
import { useThemeContext } from "../context/themeContext";
import Footer from "../components/footer";
import RepoLinks from "../components/repo/repoLinks";
import Header from "../components/header";


const RepositoryPage = () => {

    const { pageTheme } = useThemeContext()
    const h2 = "Repositories"

    return (<Container fluid className={`homepage ${pageTheme}`}>

        <NavBar />

        <Header h2={h2} />

        <RepoLinks />

        <Footer />

    </Container>)
}

export default RepositoryPage