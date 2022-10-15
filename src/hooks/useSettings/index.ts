import { useState } from 'react';

import { Language, Settings, Theme } from '../../types/common';
import { UseSettings } from './types';

export const useSettings = (): UseSettings => {
  const savedSettingsData = localStorage.getItem('settings');

  let initialSettingsData: Settings | null;

  if (savedSettingsData != null) {
    initialSettingsData = JSON.parse(savedSettingsData);
  } else {
    initialSettingsData = null;
  }

  const [settingsData, setSettingsData] = useState<Settings>(
    initialSettingsData != null
      ? initialSettingsData
      : { theme: Theme.LightTheme, language: Language.English },
  );

  const addSettingsData = (theme: Theme, language: Language): void => {
    localStorage.setItem('settings', JSON.stringify({ theme, language }));

    setSettingsData({ theme, language });
  };

  return { settingsData, addSettingsData };
};
