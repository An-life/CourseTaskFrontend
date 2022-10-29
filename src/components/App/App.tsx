import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import classNames from 'classnames';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { addUserData } from '../../store/user/userSlice';
import AdminPanel from '../AdminPanel';
import { Context } from '../../context/settingsContext';
import ItemPage from '../ItemPage';
import CollectionPage from '../CollectionPage';
import { Language, Theme } from '../../types/settings';
import { LOCALES } from '../../i18n/locales';
import Main from '../Main';
import { messages } from '../../i18n/messages';
import Nav from '../Nav';
import UserPage from '../UserPage';
import { useSettings } from '../../hooks/useSettings';
import { useGetMeQuery } from '../../api/authApi';

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
  const dispatch = useDispatch();

  const SettingContext = useMemo(() => settingsData, [settingsData]);
  const { data, isSuccess } = useGetMeQuery();
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addUserData({ id: data._id, status: data.status, role: data.role }));
    }
  }, [isSuccess]);

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
                <Route element={<Main />} path={'/'} />
                <Route element={<AdminPanel />} path={'/adminPanel'} />
                <Route element={<UserPage />} path={'/userPage'} />
                <Route element={<ItemPage />} path={'/item/:id'} />
                <Route element={<CollectionPage />} path={'/collection/:id'} />
              </Routes>
            </main>
          </div>
        </Context.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default App;
