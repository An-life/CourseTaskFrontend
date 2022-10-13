import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { Theme } from '../../types/common';

export interface IThemeState {
  theme: Theme;
}

const initialState: IThemeState = {
  theme: Theme.LightTheme,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<{
        theme: Theme;
      }>,
    ) => {
      state.theme = action.payload.theme;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const lookedReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { setTheme } = themeSlice.actions;
