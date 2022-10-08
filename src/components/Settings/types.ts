import { SelectChangeEvent } from '@mui/material/Select/Select';
import { Language, Theme } from '../../types/common';

export interface ISettingOption {
  title: string;
  value: Theme | Language;
  onChange: (event: SelectChangeEvent) => void;
  items: ISettingsItem[];
}

export interface ISettingsItem {
  item: Theme | Language;
  itemTitle: string;
}
