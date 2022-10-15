import React from 'react';

import { Language, Settings, Theme } from './../../types/common';

export const Context = React.createContext<Settings>({
  theme: Theme.LightTheme,
  language: Language.English,
});
