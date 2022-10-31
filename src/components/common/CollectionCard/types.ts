import { IconButtonProps } from '@mui/material/IconButton';

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface ICatalogCard {
  title: string;
  user: string;
  topic: string;
  description: string;
}
