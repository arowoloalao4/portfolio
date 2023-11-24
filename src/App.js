import './darkmode.css';
import './lightmode.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectsComponent from './projects';
import { useEffect, useState } from 'react';
import RepoPage from './repo';

function App() {


  let [dropdown, setDropDown] = useState('')

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
        handleDropDown={handleDropDown}
        dropdown={dropdown} />}></Route>

      <Route path='/projects' element={<ProjectsComponent
        handleDropDown={handleDropDown}
        dropdown={dropdown}
      />}></Route >

      <Route path='/repos' element={<RepoPage
        handleDropDown={handleDropDown}
        dropdown={dropdown}
      />}></Route>
    </Routes >
  );
}

export default App;
