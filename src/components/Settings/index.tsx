import React, { SetStateAction, useContext, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Context } from '../../context/settingsContext';
import { Language, Theme } from '../../types/settings';
import { ISettingOption } from './types';
import { SettingsProps } from '../Nav/types';

function Settings({ changeSettings }: SettingsProps): JSX.Element {
  const { theme, language } = useContext(Context);
  const [languageSetting, setLanguageSetting] = useState<Language>(language);
  const [themeSetting, setThemeSetting] = useState<Theme>(theme);

  useEffect(() => {
    changeSettings(themeSetting, languageSetting);
  }, [themeSetting, languageSetting]);

  const settingsOptions: ISettingOption[] = [
    {
      title: 'Theme',
      value: theme,
      onChange: setThemeSetting,
      items: [
        { item: Theme.LightTheme, itemTitle: 'Light theme' },
        { item: Theme.DarkTheme, itemTitle: 'Dark theme' },
      ],
    },
    {
      title: 'Language',
      value: language,
      onChange: setLanguageSetting,
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
              <InputLabel>{title}</InputLabel>
              <Select
                value={value}
                label={title}
                onChange={e =>
                  onChange(
                    e.target.value as SetStateAction<Theme> & SetStateAction<Language>,
                  )
                }
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
