import './styles/darkmode.css';
import './styles/lightmode.css'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import HomePage from './pages/homepage'
import { DescriptionProvider } from './context/userContext';
import ProjectsPage from './pages/projects'
import RepositoryPage from './pages/repo'

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
