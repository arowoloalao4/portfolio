import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {

    const [myProjects, setMyProjects] = useState([
        { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
        { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },
        { name: 'React Bookstore Application', url: 'https://bookstoreapp-389b8.web.app' },
        { name: 'React Inventory Management', url: 'https://inventoryapp-5900c.web.app/' },
        { name: 'React Todo App', url: 'https://mytodoapp-37742.web.app/' },
        { name: 'React Xchange', url: 'https://xchangepage-a9c1b.web.app/' },
        { name: 'EduSync Backend: Node.js Integration', url: 'https://github.com/Ollah16/reactSchoolAppBackEnd.git' },
        { name: 'StockWise Backend: Node.js Foundation', url: 'https://github.com/Ollah16/inventoryBE.git' },
        { name: 'InvoiceCraft: React Invoice Generator Website', url: 'https://github.com/Ollah16/Invoice_App.git' }
    ]);


    return (
        <Container className="p-5 body">

            <Row className="mb-5">
                <Col lg={12} md={12} sm={12} xs={12} className="text-center">
                    <h1>Unveiling My Digital Craftsmanship</h1>
                    <hr className="vertical-line me-2" />
                    <p>
                        Welcome, I'm Olaoluwa Oke - a passionate junior web developer, adept in Node.js and React.js.
                        Through meticulous craftsmanship and dedication, I've weaved digital tapestries that resonate with users. My commitment is to architect solutions that are not just functional, but intuitively beautiful. Join me on this journey of pixels, patterns, and possibilities.
                    </p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12} md={12} sm={12} xs={12} className="text-center">
                    <h3>Highlights From My Portfolio</h3>
                </Col>

                {myProjects.map((project, index) => (
                    <Col lg={4} md={6} sm={12} xs={12} className="mb-3" key={index}>
                        <div className="projectCol p-3">
                            {project.name === 'Da-Manager' || project.name === 'Medillery' ?
                                <a href={project.url} className="text-center d-block links mb-2">{project.name} - Where I Honed My Skills</a> :
                                <Link className="text-center d-block links mb-2" to={project.url}>{project.name != 'Da-Manager: Pioneering Digital Solutions' && project.name != 'Medillery: Empowering Designers, Enriching Society' && <span>Repository:</span>} {project.name}</Link>
                            }
                            <p className="project-description">
                                A glimpse of {project.name}. Here, you'll find the harmonious blend of technology and innovation that I've employed.
                            </p>
                        </div>
                    </Col>
                ))}

            </Row>

            <Row className="mt-5">
                <Col lg={12} md={12} sm={12} xs={12} className="text-center">
                    <p>
                        Ready to create something memorable? Let's bring that idea to life! Feel free to <a href="mailto:olah_oluh@outlook.com">email me directly</a>.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}
export default HomePage;