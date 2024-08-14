import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext(null)

export const DescriptionProvider = ({ children }) => {

    const [introduction, setIntroduction] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {

        const handleCounter = (event) => {
            if (event?.key === 'Enter') {
                axios.post(`https://book-store-back-end-three.vercel.app/counts/count`,
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    }).then(() => { }).catch((err) => { console.log(err) })
            }
        }

        document.addEventListener('keypress', handleCounter);

        return () => document.removeEventListener('keypress', handleCounter);

    }, []);

    useEffect(() => {
        let timeOut, index = 0, newIntro = ''
        let intro = '> self.learnAboutMe( )\nPress Enter to see what I am about.'

        const handleIntroduction = () => {
            if (index < intro.length) {
                newIntro += intro[index]
                setIntroduction(newIntro)
                timeOut = setTimeout(() => {
                    index++
                    handleIntroduction()
                }, 50)
            }
        }

        handleIntroduction()

        return () => clearTimeout(timeOut)

    }, [])

    useEffect(() => {
        let timeout;
        let fullDescription = `
        \n> self.currentLocation
         United Kingdom
        \n> self.education
        ["MSc Engineering Management, 2022-2023", "B.Tech Agricultural Engineering, 2012-2020"]
        \n> self.techStack
        ["HTML", "CSS", "Javascript", "Typescript", "React.js", "Next.js", "Vue", "Nuxt.js", "Angular", "Redux", "Bootstrap", "Tailwind", "MUI", "Node.js", "Express", "MySQL", "NoSQL", "Git", "GitHub", "Vercel", "Firebase", "AWS", ...rest]
        \n> self.contactMe( )
        ["LinkedIn", "Github", "Twitter/X", "Instagram", "Discord", "Telegram", "Email"]`

        const provideDescription = (event) => {
            if (event?.key === 'Enter') {
                setIntroduction((prev) => prev.replace('Press Enter to see what I am about.', 'Loaded data . . .'));

                for (let i = 0; i < fullDescription.length; i++) {
                    timeout = setTimeout(() => {
                        setDescription((prev) => prev += fullDescription[i])
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

    }, [setDescription, setIntroduction]);

    const contextValue = useMemo(() => ({ introduction, setIntroduction, description }), [description, introduction, setIntroduction]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export const useDescription = () => useContext(UserContext)