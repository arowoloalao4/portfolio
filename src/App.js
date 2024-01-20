import './darkmode.css';
import './lightmode.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectsComponent from './projects';
import { useEffect, useState } from 'react';
import RepoPage from './repo';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage
      />}></Route>

      <Route path='/projects' element={<ProjectsComponent
      />}></Route >

      <Route path='/repos' element={<RepoPage
      />}></Route>
    </Routes >
  );
}

export default App;
