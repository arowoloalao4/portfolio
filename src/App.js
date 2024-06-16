import './styles/darkmode.css';
import './styles/lightmode.css'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import HomePage from './pages/homepage'
import { lazy } from 'react';
import { DescriptionProvider } from './context/userContext';

const ProjectsPage = lazy(() => import('./pages/projects'))
const RepositoryPage = lazy(() => import('./pages/repo'))

function App() {

  return (
    <ThemeContext>
      <DescriptionProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/repos' element={<RepositoryPage />} />
        </Routes >
      </DescriptionProvider>
    </ThemeContext >);
}

export default App;
