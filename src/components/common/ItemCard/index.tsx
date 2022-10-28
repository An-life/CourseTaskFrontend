import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import noImage from './../../../assets/images/noImage.png';
import { IItemCard } from './types';

const ItemCard = ({ title }: IItemCard): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader title={title} />
      <CardMedia component="img" height="150" image={noImage} alt="image" />
      <Typography variant="body2" color="text.secondary">
        <span>Author: Me</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span>Collection:</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span>Tags:</span>
        <Chip label="Tag" variant="outlined" />
      </Typography>
    </Card>
  );
};

export default ItemCard;
