import { Language, Theme } from '../../types/common';

export interface ISettingOption {
  title: string;
  value: Theme | Language;
  onChange: any;
  items: ISettingsItem[];
}

export interface ISettingsItem {
  item: Theme | Language;
  itemTitle: string;
}
