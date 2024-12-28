import React from 'react'

const Header = ({ h2 = null, p = null }) => {

    return (<section className={`header-section`}>
        <div className='header-container'>
            <h2>{h2}</h2>
            <p>{p}</p>
        </div>
    </section >)
}

export default Header