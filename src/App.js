import './styles/darkmode.css';
import './styles/lightmode.css'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import RepositoryPage from './pages/repo';
import ProjectsPage from './pages/projects';
import HomePage from './pages/homepage';

function App() {

  return (
    <ThemeContext>
      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/projects' element={<ProjectsPage />} />

        <Route path='/repos' element={<RepositoryPage />} />

      </Routes >
    </ThemeContext>);
}

export default App;
