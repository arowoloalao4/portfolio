import React from 'react'
import { useThemeContext } from '../../context/themeContext';
import { Link } from 'react-router-dom';

export const loadRepos = () => [
    {
        title: 'Bookstore Application',
        link: 'https://github.com/Ollah16/bookstore.git'
    },

    {
        title: 'AI Journey Application',
        link: 'https://github.com/Ollah16/tripbuddy.git'
    },
    {
        title: 'Inventory Application',
        link: 'https://github.com/Ollah16/app_inventory.git'
    },
    {
        title: 'Invoice Application',
        link: 'https://github.com/Ollah16/invoice-app.git'
    },
    {
        title: 'School Application',
        link: 'https://github.com/Ollah16/react-school-portal.git'
    },
    {
        title: 'Exchange Application',
        link: 'https://github.com/Ollah16/currencyXchange.git'
    },
    {
        title: 'Todo Application',
        link: 'https://github.com/Ollah16/todoApp.git'
    },
    {
        title: 'Portfolio Application',
        link: 'https://github.com/Ollah16/myPortfolio.git'
    },
    {
        title: 'School Server',
        link: 'https://github.com/Ollah16/reactSchoolAppBackEnd.git'
    },
    {
        title: 'Inventory Server',
        link: 'https://github.com/Ollah16/inventoryBE.git'
    },
    {
        title: 'Bookstore Server',
        link: 'https://github.com/Ollah16/bookStoreBackEnd.git'
    },
    {
        title: 'Invoice Server',
        link: 'https://github.com/Ollah16/invoiceBackEnd.git'
    },
    {
        title: 'Tradex Application',
        link: 'https://github.com/Ollah16/tradeX.git'
    },
    {
        title: 'Tradex Server',
        link: 'https://github.com/Ollah16/tradeXserver.git'
    }

];

const RepoLinks = () => {
    const { pageTheme } = useThemeContext()
    const repos = loadRepos()

    return (
        <section className={pageTheme === 'lightmode' ?
            'repo-section-lightmode' : 'repo-section-darkmode'}>

            {repos.map((git, index) => (
                <Link to={git.link} key={index}>
                    <span>{git.title}</span>
                </Link>
            ))}

        </section>
    )
}

export default RepoLinks
