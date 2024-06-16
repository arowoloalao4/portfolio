import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const UserContext = createContext(null)

export const DescriptionProvider = ({ children }) => {

    const provideDescr = `
        \n> self.currentLocation
        "United Kingdom"
        \n> self.education
        "Engineering Management, 2022-2023, Agricultural Engineering, 2012-2020 && Udemy web development, 2019-2020"
        \n> self.techStack
        ["HTML", "CSS", "Javascript", "React.js", 'Next.js "Redux", "Bootstrap", "Tailwind", "Node.js", "Express", "MySQL", "NoSQL", "Git", ...rest]
        \n> self.contactMe( )
        ["LinkedIn", "Github", "Twitter/X", "Instagram", "Discord", "Telegram", "Email"]`

    const [introduction, setIntroduction] = useState('')

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

    const contextValue = useMemo(() => ({ introduction, setIntroduction, provideDescr }), [introduction, setIntroduction, provideDescr])

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

export const useDescription = () => useContext(UserContext)