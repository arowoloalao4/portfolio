import React from 'react'
import { useThemeContext } from '../../context/themeContext'
import DescriptionNav from '../descriptionNav';

const ProjectDetail = ({ project }) => {

    const { pageTheme } = useThemeContext()
    const { image } = project

    return (
        <section className={`projectdetail-section ${pageTheme}`}>

            <DescriptionNav size={8} className='projectdescriptionbarstyle' />

            <div className='projectdetail-imagecontainer'>
                <img src={image} alt='...' loading='eager' />
            </div>
        </section>
    )
}

export default ProjectDetail
