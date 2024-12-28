import React from 'react'
import { useThemeContext } from '../context/themeContext'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const { pageTheme } = useThemeContext()
    return (
        <div className={`layout ${pageTheme}`}>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
