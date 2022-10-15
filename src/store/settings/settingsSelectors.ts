import { ISettingsState } from './types';
import { RootState } from '../store';

export const getSettings = (state: RootState): ISettingsState => state.settings;
