import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../../context/themeContext'
import { useDescription } from '../../context/userContext'

const Description = () => {

    const { pageTheme } = useThemeContext()
    const { provideDescr, setIntroduction } = useDescription()
    const [description, setDescription] = useState('')

    useEffect(() => {
        let timeout;

        const provideDescription = (event) => {
            if (event?.key === 'Enter') {
                setIntroduction((prev) => prev.replace('Press Enter to see what I am about.', 'Loaded data . . .'));

                for (let i = 0; i < provideDescr.length; i++) {
                    timeout = setTimeout(() => {
                        setDescription((prev) => prev += provideDescr[i])
                    }, i * 50)
                }

                document.removeEventListener('keypress', provideDescription)
            }
        }

        document.addEventListener('keypress', provideDescription);

        return () => {
            document.removeEventListener('keypress', provideDescription);
            clearTimeout(timeout)
        }

    }, [provideDescr, setDescription, setIntroduction]);


    return (description.split('').map((char, index) => (
        <span key={index} className={`selfintro-section ${char === '>' ? 'icon' :
            pageTheme === 'lightmode' ? 'normal-lightmode' : 'normal-darkmode'}`}>
            {char}
        </span>
    )))
}

export default Description
