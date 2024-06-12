import React from 'react'

import { IoRadioButtonOffSharp } from "react-icons/io5";
import { RiParenthesesLine } from "react-icons/ri";

const DescrBar = () => {
    return (
        <div>
            <span className="flex">
                <IoRadioButtonOffSharp className='radioone' size={13} />
                <IoRadioButtonOffSharp className='radiotwo' size={13} />
                <IoRadioButtonOffSharp className='radiothree me-0' size={13} />
            </span>

            <span className="d-flex align-items-center">self.Introduction <RiParenthesesLine size={20} />
            </span>

            <span></span>
        </div>
    )
}

export default DescrBar
