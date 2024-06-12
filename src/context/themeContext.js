import { createContext, useContext, useEffect, useState } from 'react';

const PageTheme = createContext()

export const ThemeContext = ({ children }) => {

    let [pageTheme, setTheme] = useState();

    useEffect(() => {

        const loadTheme = localStorage.pageTheme ? localStorage.getItem('pageTheme') : 'darkmode'

        setTheme(loadTheme)

    }, [])

    const handleTheme = () => {
        const newTheme = pageTheme === 'lightmode' ? 'darkmode' : 'lightmode'
        setTheme(newTheme)
        localStorage.setItem('pageTheme', newTheme)

    };


    return (
        <PageTheme.Provider value={{ pageTheme, handleTheme }}>
            {children}
        </PageTheme.Provider>
    )
}


export const useThemeContext = () => useContext(PageTheme)
