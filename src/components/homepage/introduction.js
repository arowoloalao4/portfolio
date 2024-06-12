import React from 'react'
import { useThemeContext } from '../../context/themeContext'

const Introduction = ({ introConst }) => {
    const { pageTheme } = useThemeContext()

    return (
        introConst && introConst.split('').map((char, index) => (
            <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
                pageTheme === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
                {char}
            </span>
        ))
    )
}

export default Introduction
