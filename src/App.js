import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectsComponent from './projects';
import { useState } from 'react';

function App() {

  let [mode, setMode] = useState('darkmode')
  let [dropdown, setDropDown] = useState('')


  const handleBgMode = () => {
    if (mode === 'lightmode') {
      setMode('darkmode')
    } else {
      setMode('lightmode')
    }
  }


  const handleDropDown = () => {

    if (!dropdown) {
      setDropDown('dropdown')
      return
    } else {
      setDropDown('')
    }
  }

  return (
    <Routes>
      <Route path='/' element={<HomePage
        handleBgMode={handleBgMode}
        mode={mode}
        handleDropDown={handleDropDown}
        dropdown={dropdown} />}></Route>

      <Route path='/projects' element={<ProjectsComponent
        handleBgMode={handleBgMode}
        mode={mode}
        handleDropDown={handleDropDown}
        dropdown={dropdown}
      />}></Route >
    </Routes >
  );
}

export default App;
