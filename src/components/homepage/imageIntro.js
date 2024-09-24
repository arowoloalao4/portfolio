import React from 'react'
import { useThemeContext } from '../../context/themeContext'
import avatar from '../../asset/avatar.jpg'

const ImageIntro = () => {

    const { pageTheme } = useThemeContext()

    return (
        <section className={`about-section ${pageTheme}`}>
            <div>
                <img src={avatar} alt="...." />
            </div>
            <div >
                <h2>Hi, I'm Olaoluwa!</h2>
                <p>Welcome to my portfolio website! I am a passionate Front End developer with expertise in HTML, CSS, JavaScript, React, and more. I love turning ideas into interactive and user-friendly websites. My commitment is to architect solutions that are not just functional, but intuitively beautiful.
                </p>
            </div>
        </section>
    )
}

export default ImageIntro
