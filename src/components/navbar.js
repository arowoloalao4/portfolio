import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { useThemeContext } from "../context/themeContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const { pageTheme, handleTheme } = useThemeContext()
    const [dropdown, setDropDown] = useState(false)

    return (
        <nav
            className={`navBar px-4 ${pageTheme}`}>

            <section className="flex justify-between items-center">

                <div className="">
                    <a href="/" className={`md:text-3xl py-3 text-2xl no-underline align-bottom inline-block font-bold uppercase tracking-widest ${pageTheme === 'darkmode' ? 'text-white' : 'text-black'}`}>Olaoluwa</a>
                </div>

                <div className="flex items-center">

                    <div className="nav_linkbrand h-full">
                        <a href="projects" className={`${pageTheme === 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:left-2/4 after:bottom-0
                         hover:after:left-0 hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
                         relative py-4 inline-block 
                         `}>Projects</a>
                        <a href="/repos"
                            className={`${pageTheme === 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal  after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:left-2/4 after:bottom-0
hover:after:left-0 hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
relative py-4 inline-block
`}>Repositories</a>

                        {/* <NavLink to={"/projects"}
                            className={({ isActive }) => `${isActive ? 'after:w-full after:left-0' : 'after:left-2/4'} ${pageTheme === 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:bottom-0 hover:after:left-0
                         hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
                         relative overflow-hidden py-4 inline-block 
                         `}>Projects</NavLink>
                        <NavLink to={"/repos"}
                            className={({ isActive }) => `${isActive ? 'after:w-full after:left-0' : 'after:left-2/4'} ${pageTheme === 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal  after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:bottom-0 hover:after:left-0
hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
relative overflow-hidden py-4 inline-block
`}>Repositories</NavLink> */}
                    </div>

                    <div className="dropdown-toggler">
                        <button className={`themeToggle p-2 ${pageTheme}`}
                            onClick={() => handleTheme()}

                            data-name={`switch to ${pageTheme}`}>

                            {pageTheme === 'lightmode' ?
                                <MdOutlineNightlight size={25} />
                                :
                                <MdLightMode size={25} />
                            }

                        </button>
                    </div>

                    <div>
                        <button
                            className={`toggleBurger p-2 ${pageTheme}`}
                            onClick={() => setDropDown(prev => !prev)}>
                            <GrMenu size={25} />
                        </button>
                    </div>
                </div>
            </section>

            <section className={`dropdown ${dropdown ?
                pageTheme :
                null}`}>

                <div >

                    <div className="nav_link">
                        <a href="/">Home</a>
                        <a href="projects">Projects</a>
                        <a href="/repos">Repositories</a>
                    </div>



                    <div>

                        <button onClick={() => setDropDown(prev => !prev)}
                            className={`togglebtn ${pageTheme}`}>
                            <BiX size={32} />

                        </button>
                    </div>
                </div>

            </section>

        </nav >)
}

export default NavBar