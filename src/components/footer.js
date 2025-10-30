import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { useThemeContext } from '../context/themeContext';

const Footer = () => {

    const { pageTheme } = useThemeContext()

    return (<div className={'footer-section'}>
        <div>
            <FaCode size={19} className={pageTheme === 'lightmode' ?
                "lightmode-link" : 'darkmode-link me-2'} />
            Web Developer
        </div>

        <div>
            <Link to={'mailto:arowoloalao4@gmail.com'}
                data-name="Email">
                <MdOutlineMail size={19} className={pageTheme === 'lightmode' ?
                    "lightmode-link" : 'darkmode-link'}
                />
            </Link>

            <Link to={'https://github.com/arowoloalao4'}
                data-name="GitHub">
                <FaGithubSquare size={19} className={pageTheme === 'lightmode' ?
                    "lightmode-link" : 'darkmode-link'} />
            </Link>
        </div>
    </div >
    )
}

export default Footer
