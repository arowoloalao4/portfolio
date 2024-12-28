import React from 'react'
import DescriptionSection from './descriptionSection'
import DescriptionNav from '../descriptionNav'
import { RiParenthesesLine } from "react-icons/ri";

const Introduction = () => {

    return (
        <section className={`${'introduction-section'}`}>
            <div className='introduction-container'>
                <DescriptionNav size={13} navLabel="self.Introduction" labelIcon={<RiParenthesesLine size={20} />} />
                <DescriptionSection />
            </div>
        </section >
    )
}

export default Introduction
