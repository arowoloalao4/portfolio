import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const Description = ({ selfDescription }) => {

    const { pageTheme } = useThemeContext()

    return (selfDescription.split('').map((char, index) => (
        <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
            pageTheme === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
            {char}
        </span>
    )))
}

export default Description
