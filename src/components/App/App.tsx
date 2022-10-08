import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Nav from '../Nav';

import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Nav />
      <div>
        <Routes>
          <Route element={<Main />} path={''} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
