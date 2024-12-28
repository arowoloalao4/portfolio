import React from 'react'
import { useAboutMe } from '../../context/userContext'
const DescriptionSection = () => {
    const { introduction, description } = useAboutMe()
    return (
        <section className='selfdescription-section'>
            <div className='selfdescription-container'>
                {introduction && introduction.split('').map((char, index) => (
                    <span key={index} className={`${char === '>' ? 'icon' : ''}`}>
                        {char}
                    </span>
                ))}
                {description.split('').map((char, index) => (
                    <span key={index} className={`${char === '>' ? 'icon' : ''}`}>
                        {char}
                    </span>
                ))}
            </div>
        </section>)
}
export default DescriptionSection