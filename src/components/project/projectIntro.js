import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const ProjectIntro = () => {

    const { pageTheme } = useThemeContext()

    return (<section className={`projects__section ${pageTheme === 'lightmode' ?
        'lightmode' : 'darkmode'}`}>

        <h2>My projects</h2>
        <p>Highlights from my projects</p>

    </section>)
}

export default ProjectIntro
