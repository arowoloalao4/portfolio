import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (<Container className="p-3">

        <Row className="mt-3 mb-3">
            <h3 className="heading3">My Portfolio</h3>
        </Row>
        <Row className="d-flex justify-content-between mb-5">
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://da-manager.com">Da-Manager</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://medillery.com">Medillery</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/bookstore.git">React Bookstore Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/reactSchoolAppBackEnd.git">Node bookStoreBackEnd Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/react-school-portal.git">React School Portal Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/reactSchoolAppBackEnd.git">Node SchoolPortal Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/app_inventory.git">React Inventory Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/inventoryBE.git">Node Inventory Backend Repo</Link>
            </Col >
            <Col className="project-cols m-1" lg={2} md={3} sm={3} xs={5}>
                <Link className="text-center links" to="https://github.com/Ollah16/Invoice_App.git">React Invoice Repo</Link>
            </Col >
        </Row>

    </Container>)
}
export default HomePage