import { Dispatch, SetStateAction } from 'react';
import { Language, Theme } from '../../types/settings';

export interface ISettingOption {
  title: string;
  value: Theme | Language;
  onChange: Dispatch<SetStateAction<Theme>> | Dispatch<SetStateAction<Language>>;
  items: ISettingsItem[];
}

export interface ISettingsItem {
  item: Theme | Language;
  itemTitle: string;
}
