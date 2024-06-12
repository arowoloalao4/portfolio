import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const RepoIntro = () => {

    const { pageTheme } = useThemeContext()

    return (
        <section className={pageTheme === 'lightmode' ?
            'projects-section-lightmode' : 'projects-section-darkmode'}>
            <h2>Repositories</h2>
        </section>
    )
}

export default RepoIntro
