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
            className={`navBar ${mode}`}>

            <section className="nav-brand-bar">

                <div>
                    <a href="/">Olaoluwa</a>
                </div>

                <div>

                    <div className="nav_linkbrand">
                        <a href="projects">Projects</a>
                        <a href="/repos">Repositories</a>
                    </div>

                    <div className="dropdown-toggler">
                        <button className={`modeToggle ${mode}`}
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
                            className={`toggleBurger ${mode}`}
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