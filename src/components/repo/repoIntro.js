import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const RepoIntro = () => {

    const { pageTheme } = useThemeContext()

    return (
        <section className={`projects__section ${pageTheme === 'lightmode' ?
            'lightmode' : 'darkmode'}`}>
            <h2>Repositories</h2>
        </section>
    )
}

export default RepoIntro
