import React from 'react';
import AdminPanel from '../AdminPanel';
import { getSettings } from '../../store/settings/settingsSelectors';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from '../Main';
import Nav from '../Nav';

import styles from './App.module.scss';

function App(): JSX.Element {
  const { theme } = useSelector(getSettings);
  console.log(theme, 'in app');

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Routes>
          <Route element={<Main />} path={''} />
          <Route element={<AdminPanel />} path={'/adminPanel'} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
