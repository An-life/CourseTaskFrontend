import { Language, Theme } from '../../types/common';

export type DrawerContent = 'login' | 'settings';

export interface SettingsProps {
  changeSettings: (theme: Theme, language: Language) => void;
}
