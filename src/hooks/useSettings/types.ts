import { Language, Settings, Theme } from '../../types/common';

export interface UseSettings {
  settingsData: Settings;
  addSettingsData: (theme: Theme, language: Language) => void;
}
