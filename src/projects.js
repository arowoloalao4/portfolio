import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiX } from "react-icons/bi";
import useMode from './custom-hook/useMode';
import { GrMenu } from "react-icons/gr";
import useDropDown from './custom-hook/useDropdown';
import NavBar from './navbar';


const ProjectsComponent = ({ }) => {

    const [myProjects, setMyProjects] = useState([
        // { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
        // { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },
        {
            name: 'Inventory Application',
            url: 'https://inventoryapp-5900c.web.app/',
            description: "Built an efficient inventory app with React.js, Redux, Node.js, and MongoDB.",
            image: './asset/inventorySc.png'
        },
        {
            name: 'Bookstore Application',
            url: 'https://bookstoreapp-389b8.web.app',
            description: 'Crafted a bookstore app with React.js, Redux, Node.js, MongoDB for seamless book additions.',
            image: './asset/bookstore.png'
        },
        {
            name: 'School Application',
            url: 'https://school-app-e4abd.web.app',
            description: 'Developed a scalable school portal with React.js, Redux, Node.js, and MongoDB.',
            image: './asset/schoolapp.png'
        },
        {
            name: 'Invoice Application',
            url: 'https://invoice-app-6a126.web.app',
            description: 'Built an invoice app with React.js, Redux, Node.js, and MYSQL. Responsive design.',
            image: './asset/invoiceapp.png'
        }, {
            name: 'Cofounderslab Application',
            url: 'https://cofounderslab.com/',
            description: 'Cofounderslab is the largest startup community on the internet that matches builders with cofounders and advisors.',
            image: './asset/cofounder.png'
        },
        {
            name: 'Quidxai Application',
            url: 'https://quidxai.netlify.app/',
            description: 'QuidxAi is an innovative AI developed to aid professional and new traders make the best trading and investment decisions.',
            image: './asset/cryptoapp.png'
        },
        {
            name: 'Onecap Application',
            url: 'https://onecap.africa/',
            description: 'Gamified savings and investment platform',
            image: './asset/onecap.png'
        },
        {
            name: 'Portfolio Application',
            url: 'https://myportfolio-8bb3f.web.app',
            description: 'Built a standout portfolio with React.js, HTML5, and CSS for an engaging user experience.',
            image: './asset/bookstore.png'
        },
    ]);

    const [mode, handleMode] = useMode()
    const [dropdown, handleDropDown] = useDropDown()

    return (<Container fluid className={`homepage ${mode}`}>

        <NavBar mode={mode} handleMode={handleMode} />


        <section className={mode === 'lightmode' ?
            'projects-section-lightmode' : 'projects-section-darkmode'}>
            <h2>My projects</h2>
            <p>Highlights from my projects</p>
        </section>

        <section className='description-section'>

            {myProjects.map((project, index) => (
                <div className={`description ${mode}`} key={index}>

                    <section className={`projects-background ${mode}`}>

                        <div className='project-icon-div'>
                            <IoRadioButtonOffSharp className='radioone' size={10} />
                            <IoRadioButtonOffSharp className='radiotwo' size={10} />
                            <IoRadioButtonOffSharp className='radiothree' size={10} />
                        </div>

                        <div className='project-image-div'>
                            {project.image && <img src={require(`${project.image}`)} />}
                        </div>
                    </section>


                    <section className={`projects-description ${mode}`}>
                        <Link to={project.url}>

                            <div>
                                <h4>
                                    {project.name}
                                </h4>

                                <span className='text-white' >
                                    <FaExternalLinkAlt className='project-link' />
                                </span>
                            </div>

                            <div>
                                <span><TfiHtml5 /> HTML</span>
                                <span><FaCss3Alt /> CSS</span>
                                <span><TbBrandJavascript /> JS</span>
                            </div>

                            <p>{project.description}</p>
                        </Link>
                    </section>

                </div>
            ))
            }

        </section >

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


    </Container >)
}

export default ProjectsComponent