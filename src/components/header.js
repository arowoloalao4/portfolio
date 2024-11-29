import React from 'react'
import { useThemeContext } from '../context/themeContext'

const Header = ({ h2, p }) => {

    const { pageTheme } = useThemeContext()

    return (<section className={`projects__section ${pageTheme === 'lightmode' ?
        'lightmode' : 'darkmode'}`}>
        {h2 && <h2>{h2}</h2>}
        <p>{p}</p>
    </section>)
}

export default Header