import React from 'react';

import { Language, ISettings, Theme } from './../../types/common';

export const Context = React.createContext<ISettings>({
  theme: Theme.LightTheme,
  language: Language.English,
});
