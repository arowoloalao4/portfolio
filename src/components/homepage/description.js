import React from 'react'
import { useThemeContext } from '../../context/themeContext'
import { useDescription } from '../../context/userContext'

const Description = () => {

    const { pageTheme } = useThemeContext()
    const { description } = useDescription()

    return (description.split('').map((char, index) => (
        <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
            pageTheme === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
            {char}
        </span>
    )))
}

export default Description
