import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useThemeContext } from "../context/themeContext";
import NavBar from "../components/navbar";
import axios from "axios";
import Footer from "../components/footer";
import Description from "../components/homepage/description";
import Introduction from "../components/homepage/introduction";
import DescrBar from "../components/homepage/descrBar";
import ImageIntro from "../components/homepage/imageIntro";

const HomePage = () => {

    const { pageTheme } = useThemeContext()
    let [introConst, setIntroConst] = useState('')
    let [selfDescription, setDescription] = useState('')

    const p = '> self.learnAboutMe( )\nPress Enter to see what I am about.'

    let myDesc = `
    \n> self.currentLocation
    "London, United Kingdom"
    \n> self.education
    "Engineering Management, 2022-2023, Agricultural Engineering, 2012-2020 && Udemy web development, 2019-2020"
    \n> self.skills
    ["HTML", "CSS", "Javascript", "React.js", 'Next.js "Redux", "Bootstrap", "Tailwind", "Node.js", "Express", "MySQL", "NoSQL", "Git"]
    \n> self.contactMe( )
    ["LinkedIn", "Github", "Twitter/X", "Instagram", "Discord", "Telegram", "Email"]`

    useEffect(() => {
        let i = 0;
        let timeout;
        let newIntro = ''

        const addChar = () => {

            if (i < p.length) {

                newIntro += p[i]

                setIntroConst(newIntro)

                i++;

                timeout = setTimeout(addChar, 50);
            }
        };

        addChar();

        return (() => {
            clearTimeout(timeout)
        })

    }, [p])


    useEffect(() => {

        const handleDisplay = (event) => {
            if (event.key === 'Enter') {
                handleCounter()

                const replaceIntro = p.replace('Press enter to see what I am about.', 'Loaded data . . .')
                setIntroConst(replaceIntro);

                for (let i = 0; i < myDesc.length; i++) {
                    setTimeout(() => {
                        setDescription(prev => prev += myDesc[i])
                    }, i * 50)
                }

                document.removeEventListener('keypress', handleDisplay);
            }
        }

        document.addEventListener('keypress', handleDisplay);

        return () => {
            document.removeEventListener('keypress', handleDisplay);
        };

    }, [myDesc]);

    const handleCounter = () => {
        axios.post(`https://book-store-back-end-three.vercel.app/counts/count`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then((res) => {

            }).catch((err) => { console.log(err) })
    }

    return (<Container fluid className={`homepage ${pageTheme}`}>
        <NavBar />

        <ImageIntro />

        <section className={pageTheme === 'lightmode' ?
            'selfIntro-lightmode-section' : 'selfIntro-darkmode-section'}>

            <DescrBar />

            <div style={{ whiteSpace: 'pre-line' }}>

                <Introduction introConst={introConst} />

                <Description selfDescription={selfDescription} />

            </div>

        </section>



        <Footer />

    </Container >
    )
}
export default HomePage;