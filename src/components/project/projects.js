import React from 'react'
import { useThemeContext } from '../../context/themeContext';
import ProjectDescr from './projectDescr';
import ProjectBg from './projectBg';

const Projects = () => {

    const { pageTheme } = useThemeContext()

    const myProjects = [
        // { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
        // { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },,
        {
            name: 'Tradex Application',
            url: 'https://trade-x-omega.vercel.app/',
            description: "Developed a crypto converter with React.js and Node.js.",
            image: require('../../asset/tradexapp.png')
        },
        {
            name: 'Journey AI Application',
            url: 'https://tripbuddy-phi.vercel.app/',
            description: "Developed a journey AI buddy for children with next.js.",
            image: require('../../asset/journeybuddy.png')
        },
        {
            name: 'Inventory Application',
            url: 'https://inventoryapp-5900c.web.app/',
            description: "Built an efficient inventory app with React.js, Redux, Node.js, and MongoDB.",
            image: require('../../asset/inventorySc.png')
        },
        {
            name: 'Bookstore Application',
            url: 'https://bookstoreapp-389b8.web.app',
            description: 'Crafted a bookstore app with React.js, Redux, Node.js, MongoDB for seamless book additions.',
            image: require('../../asset/bookstore.png')
        },
        {
            name: 'School Application',
            url: 'https://school-app-e4abd.web.app',
            description: 'Developed a scalable school portal with React.js, Redux, Node.js, and MongoDB.',
            image: require('../../asset/schoolapp.png')
        },
        {
            name: 'Invoice Application',
            url: 'https://invoice-app-6a126.web.app',
            description: 'Built an invoice app with React.js, Redux, Node.js, and MYSQL. Responsive design.',
            image: require('../../asset/invoiceapp.png')
        },
        {
            name: 'Cofounderslab Application',
            url: 'https://cofounderslab.com/',
            description: 'Cofounderslab is the largest startup community on the internet that matches builders with cofounders and advisors.',
            image: require('../../asset/cofounder.png')
        },
        {
            name: 'Quidxai Application',
            url: 'https://quidxai.netlify.app/',
            description: 'QuidxAi is an innovative AI developed to aid professional and new traders make the best trading and investment decisions.',
            image: require('../../asset/cryptoapp.png')
        },
        {
            name: 'Onecap Application',
            url: 'https://onecap.africa/',
            description: 'Gamified savings and investment platform',
            image: require('../../asset/onecap.png')
        },
        {
            name: 'Portfolio Application',
            url: 'https://myportfolio-8bb3f.web.app',
            description: 'Built a standout portfolio with React.js, HTML5, and CSS for an engaging user experience.',
            image: require('../../asset/portfolio.png')
        },
    ];



    return (
        <section className='description-section'>
            {myProjects.map((project, index) => (
                <div className={`description ${pageTheme}`} key={index}>
                    <ProjectBg project={project} />
                    <ProjectDescr project={project} />
                </div>
            ))
            }

        </section >
    )
}

export default Projects
