import React, { useMemo } from 'react';
import AdminPanel from '../AdminPanel';
import classNames from 'classnames';
import { IntlProvider } from 'react-intl';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Context } from '../../context/settingsContext';
import ItemPage from '../ItemPage';
import { Language, Theme } from '../../types/common';
import { LOCALES } from '../../i18n/locales';
import Main from '../Main';
import { messages } from '../../i18n/messages';
import Nav from '../Nav';
import UserPage from '../UserPage';
import { useSettings } from '../../hooks/useSettings';

import styles from './App.module.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App(): JSX.Element {
  const { settingsData, addSettingsData } = useSettings();

  const SettingContext = useMemo(() => settingsData, [settingsData]);

  const locale =
    settingsData.language === Language.English ? LOCALES.ENGLISH : LOCALES.RUSSIAN;

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <ThemeProvider
        theme={settingsData.theme === Theme.LightTheme ? lightTheme : darkTheme}
      >
        <Context.Provider value={SettingContext}>
          <div
            className={classNames(styles.container, {
              [styles.light]: settingsData.theme === Theme.LightTheme,
              [styles.dark]: settingsData.theme === Theme.DarkTheme,
            })}
          >
            <header
              className={classNames(styles.header, {
                [styles.lightHeader]: settingsData.theme === Theme.LightTheme,
                [styles.darkHeader]: settingsData.theme === Theme.DarkTheme,
              })}
            >
              <Nav changeSettings={addSettingsData} />
            </header>
            <main className={styles.main}>
              <Routes>
                <Route element={<Main />} path={''} />
                <Route element={<AdminPanel />} path={'/adminPanel'} />
                <Route element={<UserPage />} path={'/userPage'} />
                <Route element={<ItemPage />} path={'/item/:id'} />
              </Routes>
            </main>
          </div>
        </Context.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
