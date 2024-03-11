import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { RiParenthesesLine } from "react-icons/ri";
import useMode from "./custom-hook/useMode";
import NavBar from "./navbar";
import axios from "axios";


const HomePage = () => {

    const [mode, handleMode] = useMode()
    let [introConst, setIntroConst] = useState('')
    let [selfDescription, setDescription] = useState('')
    let [listenerAdded, setListener] = useState(false)

    const p = '> self.learnAboutMe( )\nPress enter to see what I am about.'


    // \n > self.interests
    // ["database", "mysql", "sql server", "anime", "book"]

    let myDesc = `
    \n> self.currentLocation
    "London, United Kingdom"
    \n> self.education
    "Engineering Management, 2022-2023, Agricultural Engineering, 2012-2020 && Udemy web development, 2019-2020"
    \n> self.skills
    ["HTML", "CSS", "Javascript", "React", "Redux", "Bootstrap", "Tailwind", "Node.js", "MySQL", "NoSQL", "Git"]
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

    const handleDisplay = (event) => {
        if (event.key === 'Enter') {
            handleCounter()
            setIntroConst(p.replace(
                'Press enter to see what I am about.',
                'Loaded data . . .'
            ));

            for (let i = 0; i < myDesc.length; i++) {
                setTimeout(() => {
                    setDescription(prev => prev += myDesc[i])
                }, i * 50)
            }

            document.removeEventListener('keypress', handleDisplay);
        }
    }

    const handleCounter = () => {
        axios.post(`https://book-store-back-end-three.vercel.app/counts/count`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then((res) => {

            }).catch((err) => { console.log(err) })
    }

    useEffect(() => {

        document.addEventListener('keypress', handleDisplay);

        return () => {
            document.removeEventListener('keypress', handleDisplay);
        };

    }, []);

    return (<Container fluid className={`homepage ${mode}`}>
        <NavBar mode={mode} handleMode={handleMode} />

        <section className={`about-section ${mode}`}>
            <div>
                <img src={require(`${'./asset/photo.jpg'}`)} />
            </div>
            <div >
                <h2>Hi, I'm Olaoluwa!</h2>
                <p>Welcome to my portfolio website! I am a passionate web developer with expertise in HTML, CSS, JavaScript, React, and more. I love turning ideas into interactive and user-friendly websites. My commitment is to architect solutions that are not just functional, but intuitively beautiful.
                </p>
            </div>
        </section>

        <section className={mode === 'lightmode' ?
            'selfIntro-lightmode-section' : 'selfIntro-darkmode-section'}>
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
                    <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
                        mode === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
                        {char}
                    </span>
                ))}

                {selfDescription.split('').map((char, index) => (
                    <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
                        mode === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
                        {char}
                    </span>
                ))}
            </div>





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

    </Container >
    )
}
export default HomePage;