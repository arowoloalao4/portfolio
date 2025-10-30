import React from 'react'
import avatar from '../../assets/avatar.jpg'

const HeroSection = () => {

    return (
        <section className={`hero-section`}>
            <div className='hero-content'>
                <div>
                    <img src={avatar} alt="avatar" />
                </div>
                <div >
                    <h2>Hi, I'm Alao Arowolo!</h2>
                    <p>Welcome to my portfolio website! I am a passionate Front End engineer with expertise in HTML, CSS, JavaScript, React and more. I love turning ideas into interactive and user-friendly websites. My commitment is to architect solutions that are not just functional, but intuitively beautiful.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
