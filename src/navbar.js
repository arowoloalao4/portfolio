import React from "react";
import useMode from "./custom-hook/useMode";
import useDropDown from "./custom-hook/useDropdown";
import { BiX } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";

const NavBar = ({ mode, handleMode }) => {

    const [dropdown, handleDropDown] = useDropDown()

    return (
        <nav
            className={`navBar px-4 ${mode}`}>

            <section className="flex justify-between items-center">

                <div className="">
                    <a href="/" className={`md:text-3xl py-3 text-2xl no-underline align-bottom inline-block font-bold uppercase tracking-widest ${mode === 'darkmode' ? 'text-white' : 'text-black'}`}>Olaoluwa</a>
                </div>

                <div className="flex items-center">

                    <div className="nav_linkbrand h-full">
                        <a href="projects" className={`${mode == 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:left-2/4 after:bottom-0
                         hover:after:left-0 hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
                         relative py-4 inline-block 
                         `}>Projects</a>
                        <a href="/repos"
                            className={`${mode == 'darkmode' ? 'after:bg-white' : 'after:bg-black'} leading-normal  after:content-[''] after:inline-block after:absolute after:h-1 after:w-0 after:left-2/4 after:bottom-0
hover:after:left-0 hover:after:w-full after:transition-left after:duration-300 after:ease-in-out
relative py-4 inline-block
`}>Repositories</a>
                    </div>

                    <div className="dropdown-toggler">
                        <button className={`modeToggle p-2 ${mode}`}
                            onClick={() => handleMode()}

                            data-name={`switch to ${mode}`}>

                            {mode === 'lightmode' ?
                                <MdOutlineNightlight size={25} />
                                :
                                <MdLightMode size={25} />
                            }

                        </button>
                    </div>

                    <div>
                        <button
                            className={`toggleBurger p-2 ${mode}`}
                            onClick={() => handleDropDown()}>
                            <GrMenu size={25} />
                        </button>
                    </div>
                </div>
            </section>

            <section className={`dropdown ${dropdown ?
                mode :
                'inactive'}`}>

                <div >

                    <div className="nav_link">
                        <a href="/">Home</a>
                        <a href="projects">Projects</a>
                        <a href="/repos">Repositories</a>
                    </div>



                    <div>

                        <button onClick={() => handleDropDown()}
                            className={`togglebtn ${mode}`}>
                            <BiX size={32} />

                        </button>
                    </div>
                </div>

            </section>

        </nav >)
}

export default NavBar