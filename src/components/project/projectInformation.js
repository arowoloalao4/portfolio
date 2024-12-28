import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import { TfiHtml5 } from "react-icons/tfi";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";

const ProjectInformation = memo(function ({ project }) {

    const { url, name, description } = project
    return (<section className={`projectinfo-section`}>

        <Link className='projectinfo-container' to={url}>
            <div>
                <h4>
                    {name}
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
            <p>{description}</p>
        </Link>
    </section>)
})

export default ProjectInformation
