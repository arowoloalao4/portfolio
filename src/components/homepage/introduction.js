import React from 'react'
import { useThemeContext } from '../../context/themeContext'
import { useDescription } from '../../context/userContext'

const Introduction = () => {

    const { pageTheme } = useThemeContext()
    const { introduction } = useDescription()

    return (
        introduction && introduction.split('').map((char, index) => (
            <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
                pageTheme === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
                {char}
            </span>
        ))
    )
}

export default Introduction
