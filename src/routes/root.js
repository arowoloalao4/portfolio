import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProjectsPage from '../pages/projects'
import RepositoryPage from '../pages/repo'
import HomePage from '../pages/homepage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            index: true,
            element: <HomePage />,
        }, {
            element: <ProjectsPage />,
            path: '/projects'
        },
        {
            element: <RepositoryPage />,
            path: '/repos'
        }]
    }
])


export default router