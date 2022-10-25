import { IconButtonProps } from '@mui/material/IconButton';

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface ICatalogCard {
  cardId: string;
  title: string;
}
