import React from 'react'
import ProjectDetail from './projectDetail';
import ProjectInformation from './projectInformation';


export const loadProjects = () => [
    // { name: 'Da-Manager: Pioneering Digital Solutions', url: 'https://da-manager.com' },
    // { name: 'Medillery: Empowering Designers, Enriching Society', url: 'https://medillery.com' },,
    {
        name: 'Tradex Application',
        url: 'https://trade-x-omega.vercel.app/',
        description: "Developed a cryptocurrency converter with React.js and Node.js.",
        image: require('../../assets/tradexapp.png')
    },
    {
        name: 'Journey AI Application',
        url: 'https://tripbuddy-phi.vercel.app/',
        description: "A journey AI buddy for children with built with next.js.",
        image: require('../../assets/journeybuddy.png')
    },
    {
        name: 'Inventory Application',
        url: 'https://inventoryapp-5900c.web.app/',
        description: "Built an efficient inventory app with React.js, Redux, Node.js, and MongoDB.",
        image: require('../../assets/inventorySc.png')
    },
    {
        name: 'Bookstore Application',
        url: 'https://bookstoreapp-389b8.web.app',
        description: 'Performant bookstore app crafted with React.js, Redux, Node.js, MongoDB for seamless book additions.',
        image: require('../../assets/bookstore.png')
    },
    {
        name: 'College Application',
        url: 'https://school-app-e4abd.web.app',
        description: 'Developed a scalable college portal with React.js, Redux, Node.js, and MongoDB.',
        image: require('../../assets/schoolapp.png')
    },
    {
        name: 'Invoice Application',
        url: 'https://invoice-app-6a126.web.app',
        description: 'Built an invoice app with React.js, Redux, Node.js, and MYSQL. Responsive design.',
        image: require('../../assets/invoiceapp.png')
    },
    {
        name: 'Battery Monitoring Dashboard',
        url: 'https://batterydashboard.vercel.app/',
        description: 'The dashboard provides real-time battery status, charge level, and historical data visualization using Recharts and Framer Motion for smooth animations.',
        image: require('../../assets/batterydashboard.png')
    },
    {
        name: 'Cofounderslab Application',
        url: 'https://cofounderslab.com/',
        description: 'Cofounderslab is the largest startup community on the internet that matches builders with cofounders and advisors.',
        image: require('../../assets/cofounder.png')
    },
    {
        name: 'Quidxai Application',
        url: 'https://quidxai.netlify.app/',
        description: 'QuidxAi is an innovative AI developed to aid professional and new traders make the best trading and investment decisions.',
        image: require('../../assets/cryptoapp.png')
    },
    {
        name: 'Onecap Application',
        url: 'https://onecap.africa/',
        description: 'Gamified savings and investment platform',
        image: require('../../assets/onecap.png')
    },
    {
        name: 'Portfolio Application',
        url: 'https://myportfolio-8bb3f.web.app',
        description: 'A standout portfolio developed with React.js, HTML5, and CSS for an engaging user experience.',
        image: require('../../assets/portfolio.png')
    },
];

const Projects = () => {
    const projects = loadProjects()

    return (
        <section className={`projectdescription-section`}>
            {projects.map((project, index) => (
                <div className={`projectdescription-container`} key={index}>
                    <ProjectDetail project={project} />
                    <ProjectInformation project={project} />
                </div>
            ))}

        </section >
    )
}

export default Projects
