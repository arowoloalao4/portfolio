import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { RiParenthesesLine } from "react-icons/ri";


const HomePage = ({ handleBgMode, mode, handleDropDown, dropdown }) => {

    let [introConst, setIntroConst] = useState('')
    let [selfDescription, setDescription] = useState('')
    let highLight = useRef()

    const p = '> self.learnAboutMe( )\nPress enter to see what I am about.'

    let myDesc = `
    \n> self.currentLocation
    "Leicester, UK"
    \n> self.interests
    ["database", "mysql", "sql server", "anime", "book"]
    \n> self.education
    "Engineering Management, 2022-2023, Agricultural Engineering, 2012-2020 && Udemy web development, 2019-2020"
    \n> self.skills
    ["HTML", "CSS", "Javascript", "React", "Node.js", "Bootstrap", "MySQL", "NoSQL", "Git"]
    \n> self.contactMe( )
    ["LinkedIn", "Github", "Twitter/X", "Instagram", "Discord", "Telegram", "Email"]`

    useEffect(() => {
        let i = 0;
        let timeout;

        const addChar = () => {
            if (i < p.length) {

                let a = (introConst += p[i]).slice(1)

                setIntroConst(a);

                i++;

                timeout = setTimeout(addChar, 50);
            }
        };

        addChar();

        return (() => {
            clearTimeout(timeout)
        })

    }, [p])

    useEffect(() => {
        document.addEventListener('keypress', handleDisplay);

        return () => {
            document.removeEventListener('keypress', handleDisplay);
        };

    }, [highLight]);

    const handleDisplay = () => {

        setIntroConst(p.replace(
            'Press enter to see what I am about.',
            'Loading . . .'
        ));

        for (let i = 0; i < myDesc.length; i++) {
            setTimeout(() => {
                setDescription(prev => prev += myDesc[i])
            }, i * 50)
        }
    }

    return (<Container fluid
        className={mode === 'lightmode' ?
            'homepage-lightmode' : 'homepage-darkmode'}>

        <nav
            className={mode === 'lightmode' ?
                'navbar-lightmode' : 'navbar-darkmode'}>

            <a href="/">Olaoluwa</a>
            <hr></hr>

            <section >
                <div >
                    <span className={dropdown ? 'dropdown-span' : 'span-links'}>
                        <button
                            className={mode === 'darkmode' ?
                                'canceltogglebtn-darkmode' : 'btn-lightmode'}
                            onClick={() => handleDropDown()}>
                            <BiX size={32} />
                        </button>

                        <a href="/">Home</a>
                        <a href="projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </span>

                    <button className={mode === 'darkmode' ?
                        'dark-mode-btn' : 'light-mode-btn'}
                        onClick={() => handleBgMode()}
                        data-name={mode === 'darkmode' ?
                            'switch to light mode' :
                            'switch to dark mode'}>

                        {mode === 'darkmode' ?
                            <MdLightMode size={25} />
                            :
                            <MdOutlineNightlight size={32} />}

                    </button>
                </div>

                <div>
                    <button onClick={() => handleDropDown()}
                        className='togglebtn-darkmode'>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </button>
                </div>
            </section>
        </nav >



        <section className="about-section">
            <div>
                <img src={require(`${'./asset/photo.jpg'}`)} />
            </div>
            <div >
                <h2>Hi, I'm Olaoluwa!</h2>
                <p>Welcome to my portfolio website! I am a passionate web developer with expertise in HTML, CSS, JavaScript, React, and more. I love turning ideas into interactive and user-friendly websites. My commitment is to architect solutions that are not just functional, but intuitively beautiful.
                </p>
            </div>
        </section>

        <section className="scroll-section">
            <div>
                <span>
                    <IoRadioButtonOffSharp className='radioone' size={13} />
                    <IoRadioButtonOffSharp className='radiotwo' size={13} />
                    <IoRadioButtonOffSharp className='radiothree me-0' size={13} />
                </span>

                <span className="d-flex align-items-center">self.Introduction <RiParenthesesLine size={20} />
                </span>

                <span></span>
            </div>

            <div style={{ whiteSpace: 'pre-line' }}>
                {introConst.split('').map((char, index) => (
                    <span key={index} className={`selfintro-section ${char === '>' ? 'icon' : 'normal'}`}>
                        {char}
                    </span>
                ))}

                {selfDescription.split('').map((char, index) => (
                    <span key={index} className={`selfintro-section ${char === '>' ? 'icon' : 'normal'}`}>
                        {char}
                    </span>
                ))}
            </div>





        </section>



        <section className="footer-section">
            <div>
                <FaCode size={19} className={mode === 'darkmode' ?
                    "darkmode-link me-2" : 'lightmode-link'} />
                Web Developer
            </div>

            <div>
                <Link to={'mailto:olaoluwa_oke@outlook.com'}
                    data-name="Email">
                    <MdOutlineMail size={19} className={mode === 'darkmode' ?
                        "darkmode-link" : 'lightmode-link'}
                    />
                </Link>

                <Link to={'https://www.linkedin.com/in/olaoluwa-oke-478a7b298/'}
                    data-name="Linkedln">
                    <FaLinkedin size={19} className={mode === 'darkmode' ?
                        "darkmode-link" : 'lightmode-link'} />
                </Link>

                <Link to={'https://github.com/Ollah16/'}
                    data-name="GitHub">
                    <FaGithubSquare size={19} className={mode === 'darkmode' ?
                        "darkmode-link" : 'lightmode-link'} />
                </Link>
            </div>
        </section>

    </Container >
    )
}
export default HomePage;