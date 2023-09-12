import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
