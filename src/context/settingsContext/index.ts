import React from 'react';

import { Language, ISettings, Theme } from './../../types/settings';

export const Context = React.createContext<ISettings>({
  theme: Theme.LightTheme,
  language: Language.English,
});
