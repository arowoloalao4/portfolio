import React from 'react'
import { useThemeContext } from '../../context/themeContext'
import { IoRadioButtonOffSharp } from "react-icons/io5";

const ProjectBg = ({ project }) => {

    const { pageTheme } = useThemeContext()
    const { image } = project

    return (
        <section className={`projects-background ${pageTheme}`}>

            <div className='project-icon-div'>
                <IoRadioButtonOffSharp className='radioone' size={10} />
                <IoRadioButtonOffSharp className='radiotwo' size={10} />
                <IoRadioButtonOffSharp className='radiothree' size={10} />
            </div>

            <div className='project-image-div'>
                <img src={image} alt='...' loading='eager' />
            </div>
        </section>
    )
}

export default ProjectBg
