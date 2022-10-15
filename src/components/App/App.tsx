import React, { useMemo } from 'react';
import AdminPanel from '../AdminPanel';
import { Route, Routes } from 'react-router-dom';

import { Context } from '../../context/settingsContext';
import Main from '../Main';
import Nav from '../Nav';
import { useSettings } from '../../hooks/useSettings';

import styles from './App.module.scss';

function App(): JSX.Element {
  const { settingsData, addSettingsData } = useSettings();

  const SettingContext = useMemo(() => settingsData, [settingsData]);

  return (
    <Context.Provider value={SettingContext}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Nav changeSettings={addSettingsData} />
        </header>
        <main className={styles.main}>
          <Routes>
            <Route element={<Main />} path={''} />
            <Route element={<AdminPanel />} path={'/adminPanel'} />
          </Routes>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;
