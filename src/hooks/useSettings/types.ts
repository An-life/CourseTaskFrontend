import { Language, ISettings, Theme } from '../../types/settings';

export interface UseSettings {
  settingsData: ISettings;
  addSettingsData: (theme: Theme, language: Language) => void;
}
