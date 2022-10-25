import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import noImage from './../../../assets/images/noImage.png';

interface IItemCard {
  cardId: string;
  title: string;
}
const ItemCard = ({ cardId, title }: IItemCard): JSX.Element => {
  const navigate = useNavigate();

  const navigateClickHandler = (id: string): void => {
    navigate(`/item/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader title={title} onClick={navigateClickHandler(cardId)} />
      <CardMedia component="img" height="150" image={noImage} alt="image" />
      <Typography variant="body2" color="text.secondary">
        Author: Me
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Collection: Col
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Tags:
        <Chip label="Tag" variant="outlined" />
      </Typography>
    </Card>
  );
};

export default ItemCard;
