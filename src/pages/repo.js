import React from "react";
import { Container } from "react-bootstrap";
import RepoLinks from "../components/repo/repoLinks";
import Header from "../components/header";


const RepositoryPage = () => {
    const h2 = "Repositories"

    return (<Container fluid>
        <Header h2={h2} />
        <RepoLinks />
    </Container>)
}

export default RepositoryPage