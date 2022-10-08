import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Language, Theme } from '../../types/common';
import { ISettingOption } from './types';

function Settings(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(Theme.LightTheme);
  const [language, setLanguage] = useState<Language>(Language.English);

  const handleChangeTheme = (event: SelectChangeEvent): void => {
    setTheme(event.target.value as Theme);
  };

  const handleChangeLanguage = (event: SelectChangeEvent): void => {
    setLanguage(event.target.value as Language);
  };

  const settingsOptions: ISettingOption[] = [
    {
      title: 'Theme',
      value: theme,
      onChange: handleChangeTheme,
      items: [
        { item: Theme.LightTheme, itemTitle: 'Light theme' },
        { item: Theme.DarkTheme, itemTitle: 'Dark theme' },
      ],
    },
    {
      title: 'Language',
      value: language,
      onChange: handleChangeLanguage,
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
                onChange={onChange}
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
