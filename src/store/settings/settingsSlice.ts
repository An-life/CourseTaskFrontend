import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ISettingsState } from './types';
import { Theme } from '../../types/common';

const initialState: ISettingsState = {
  theme: Theme.LightTheme,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (
      state,
      action: PayloadAction<{
        theme: Theme;
      }>,
    ) => {
      state = { theme: action.payload.theme };
      console.log(state, 'red');
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const settingsReducer = persistReducer(persistConfig, settingsSlice.reducer);

export const { setSettings } = settingsSlice.actions;
