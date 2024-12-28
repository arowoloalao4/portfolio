import './styles/darkmode.css';
import './styles/lightmode.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeContext } from './context/themeContext';
import { AboutMeProvider } from './context/userContext';
import Layout from '../src/pages/layout'
function App() {

  return (
    <ThemeContext>
      <AboutMeProvider>
        <Layout />
      </AboutMeProvider>
    </ThemeContext >);
}

export default App;
