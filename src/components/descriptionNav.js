import React from 'react'

import { IoRadioButtonOffSharp } from "react-icons/io5";

const DescriptionNav = ({ size, navLabel = null, labelIcon = null, className = null }) => {
    return (
        <section className='descriptionbar-section'>
            <div className={`descriptionbar-container ${className}`}>
                <span className="flex">
                    <IoRadioButtonOffSharp size={size} />
                    <IoRadioButtonOffSharp size={size} />
                    <IoRadioButtonOffSharp size={size} />
                </span>

                <span className="d-flex align-items-center">{navLabel}{labelIcon}
                </span>

                <span></span>
            </div>
        </section>
    )
}

export default DescriptionNav
