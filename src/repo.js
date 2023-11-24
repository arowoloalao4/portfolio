import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import useMode from "./custom-hook/useMode";


const RepoPage = ({ handleDropDown, dropdown }) => {

    const [gitRepos, setGitRepos] = useState([
        {
            title: 'Bookstore Application',
            link: 'https://github.com/Ollah16/bookstore.git'
        },
        {
            title: 'Inventory Application',
            link: 'https://github.com/Ollah16/app_inventory.git'
        },
        {
            title: 'Invoice Application',
            link: 'https://github.com/Ollah16/invoice-app.git'
        },
        {
            title: 'School Application',
            link: 'https://github.com/Ollah16/react-school-portal.git'
        },
        {
            title: 'Exchange Application',
            link: 'https://github.com/Ollah16/currencyXchange.git'
        },
        {
            title: 'Todo Application',
            link: 'https://github.com/Ollah16/todoApp.git'
        },
        {
            title: 'Portfolio Application',
            link: 'https://github.com/Ollah16/myPortfolio.git'
        },
        {
            title: 'School Server',
            link: 'https://github.com/Ollah16/reactSchoolAppBackEnd.git'
        },
        {
            title: 'Inventory Server',
            link: 'https://github.com/Ollah16/inventoryBE.git'
        },
        {
            title: 'Bookstore Server',
            link: 'https://github.com/Ollah16/bookStoreBackEnd.git'
        },
        {
            title: 'Invoice Server',
            link: 'https://github.com/Ollah16/invoiceBackEnd.git'
        }
    ]);

    const [mode, handleMode] = useMode()

    return (<Container fluid
        className={mode === 'lightmode' ?
            'homepage-lightmode' : 'homepage-darkmode'}>

        <nav
            className={mode === 'lightmode' ?
                'navbar-lightmode' : 'navbar-darkmode'}>

            <a href="/">Olaoluwa</a>

            <section >
                <div >
                    <span className={dropdown ? 'dropdown-span' : 'span-links'}>
                        <button
                            className={mode === 'lightmode' ?
                                'canceltogglebtn-lightmode' : 'canceltogglebtn-darkmode'}
                            onClick={() => handleDropDown()}>
                            <BiX size={32} />
                        </button>

                        <a href="/">Home</a>
                        <a href="projects">Projects</a>
                        <a href="/repos">Repositories</a>
                    </span>


                    <button className={mode === 'lightmode' ?
                        'lightmode-btn' : 'darkmode-btn'}
                        onClick={() => handleMode()}

                        data-name={mode === 'lightmode' ?
                            'switch to dark mode' :
                            'switch to light mode'}>

                        {mode === 'lightmode' ?
                            <MdOutlineNightlight size={25} />
                            :
                            <MdLightMode size={25} />
                        }

                    </button>
                </div>

                <div>
                    <button onClick={() => handleDropDown()}
                        className={mode === 'lightmode' ?
                            'togglebtn-darkmode' : 'togglebtn-lightmode'}>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </button>
                </div>
            </section>
        </nav >

        <section className={mode === 'lightmode' ?
            'projects-section-lightmode' : 'projects-section-darkmode'}>
            <h2>My Repositories</h2>
        </section>

        <section className={mode === 'lightmode' ?
            'repo-section-lightmode' : 'repo-section-darkmode'}>

            {gitRepos.map((git, index) => (
                <Link to={git.link} key={index}>
                    <span>{git.title}</span>
                    <span>{git.description}</span>
                    <span>{git.language}</span>
                </Link>
            ))}

        </section>

        <section className={mode === 'lightmode' ?
            'footer-lightmodesection' : 'footer-darkmodesection'}>
            <div>
                <FaCode size={19} className={mode === 'lightmode' ?
                    "lightmode-link" : 'darkmode-link me-2'} />
                Web Developer
            </div>

            <div>
                <Link to={'mailto:olaoluwa_oke@outlook.com'}
                    data-name="Email">
                    <MdOutlineMail size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'}
                    />
                </Link>

                <Link to={'https://www.linkedin.com/in/olaoluwa-oke-478a7b298/'}
                    data-name="Linkedln">
                    <FaLinkedin size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'} />
                </Link>

                <Link to={'https://github.com/Ollah16/'}
                    data-name="GitHub">
                    <FaGithubSquare size={19} className={mode === 'lightmode' ?
                        "lightmode-link" : 'darkmode-link'} />
                </Link>
            </div>
        </section >

    </Container>)
}

export default RepoPage