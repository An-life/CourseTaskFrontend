import { Language, Theme } from '../../types/common';

export interface ISettingOption {
  title: string;
  value: Theme | Language | string;
  onChange: (e: Theme | Language | string) => void;
  items: ISettingsItem[];
}

export interface ISettingsItem {
  item: Theme | Language | string;
  itemTitle: string;
}
