import React from 'react'
import { Link } from 'react-router-dom';

export const loadRepos = () => [
    {
        title: 'Bookstore Application',
        link: 'https://github.com/arowoloalao4/bookstore'
    },
    {
        title: 'AI Journey Application',
        link: 'https://github.com/arowoloalao4/tripbuddy'
    },
    {
        title: 'Inventory Application',
        link: 'https://github.com/arowoloalao4/inventoryApp'
    },
    {
        title: 'Battery Dashboard',
        link: 'https://github.com/arowoloalao4/batterydashboard'
    },
    {
        title: 'Invoice Application',
        link: 'https://github.com/arowoloalao4/invoiceapp'
    },
    {
        title: 'College Application',
        link: 'https://github.com/arowoloalao4/schooldashboard'
    },
    {
        title: 'Portfolio Application',
        link: 'https://github.com/arowoloalao4/portfolio'
    },
    {
        title: 'School Server',
        link: 'https://github.com/arowoloalao4/schooldashboardBE'
    },
    {
        title: 'Inventory Server',
        link: 'https://github.com/arowoloalao4/inventoryAppBE'
    },
    {
        title: 'Bookstore Server',
        link: 'https://github.com/arowoloalao4/bookstoreBE'
    },
    {
        title: 'Invoice Server',
        link: 'https://github.com/arowoloalao4/invoiceBE'
    },
    {
        title: 'Tradex Application',
        link: 'https://github.com/arowoloalao4/tradex'
    },
    {
        title: 'Tradex Server',
        link: 'https://github.com/arowoloalao4/tradexserver'
    }

];

const RepoLinks = () => {
    const repos = loadRepos()

    return (
        <section className={'repo-section'}>

            {repos.map((git, index) => (
                <Link to={git.link} key={index}>
                    <span>{git.title}</span>
                </Link>
            ))}

        </section>
    )
}

export default RepoLinks
