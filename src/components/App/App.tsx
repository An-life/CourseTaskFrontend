import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main';
import Nav from '../Nav';

import styles from './App.module.scss';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Routes>
          <Route element={<Main />} path={''} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
