import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Language, Theme } from '../../types/common';
import { ISettingOption } from './types';
import { SettingsProps } from '../Nav/types';

function Settings({ changeSettings }: SettingsProps): JSX.Element {
  const [language, setLanguage] = useState<Language | string>('');
  const [theme, setTheme] = useState<Theme | string>('');

  useEffect(() => {
    const themeSetting = theme !== '' ? theme : Theme.LightTheme;
    const languageSettings = language !== '' ? language : Language.English;
    changeSettings(themeSetting as Theme, languageSettings as Language);
  }, [theme, language]);

  const settingsOptions: ISettingOption[] = [
    {
      title: 'Theme',
      value: theme,
      onChange: setTheme,
      items: [
        { item: Theme.LightTheme, itemTitle: 'Light theme' },
        { item: Theme.DarkTheme, itemTitle: 'Dark theme' },
      ],
    },
    {
      title: 'Language',
      value: language,
      onChange: setLanguage,
      items: [
        { item: Language.English, itemTitle: 'English' },
        { item: Language.Russian, itemTitle: 'Русский' },
      ],
    },
  ];

  return (
    <>
      {settingsOptions.map(({ title, value, onChange, items }) => {
        return (
          <Box sx={{ maxWidth: 200, margin: 5 }} key={title}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">{title}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={title}
                onChange={e => onChange(e.target.value)}
              >
                {items.map(({ item, itemTitle }) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {itemTitle}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        );
      })}
    </>
  );
}

export default Settings;
