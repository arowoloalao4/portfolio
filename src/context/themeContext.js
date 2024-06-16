import { createContext, useContext, useState, useMemo, useCallback } from 'react';

const PageTheme = createContext();

export const ThemeContext = ({ children }) => {
    const [pageTheme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('pageTheme');
        return storedTheme ? storedTheme : 'darkmode';
    });

    const handleTheme = useCallback(() => {
        const newTheme = pageTheme === 'lightmode' ? 'darkmode' : 'lightmode';
        setTheme(newTheme);
        localStorage.setItem('pageTheme', newTheme);
    }, [pageTheme]);


    const contextValue = useMemo(() => ({ pageTheme, handleTheme }), [pageTheme, handleTheme]);

    return (
        <PageTheme.Provider value={contextValue}>
            {children}
        </PageTheme.Provider>
    );
};

export const useThemeContext = () => useContext(PageTheme);
