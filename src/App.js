import './styles/darkmode.css';
import './styles/lightmode.css'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import { DescriptionProvider } from './context/userContext';

function App() {

  return (
    <ThemeContext>
      <DescriptionProvider>
        <Outlet />
      </DescriptionProvider>
    </ThemeContext >);
}

export default App;
