import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { amber } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import noImage from './../../../assets/images/noImage.png';
import { IItemCard } from './types';

const ItemCard = ({ title, user, collection, tags }: IItemCard): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="150" image={noImage} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <SentimentVerySatisfiedIcon fontSize="small" sx={{ color: amber[500] }} />
          Author: {user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <PermMediaIcon fontSize="small" sx={{ color: amber[500] }} />
          Collection: {collection}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <BookmarkBorderIcon fontSize="small" sx={{ color: amber[500] }} />
          {tags.map(tag => (
            <Chip key={tag} label={tag} />
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={<FormattedMessage id="main_go_to" />}>
          <IconButton
            onClick={() => {
              navigate('/item/6');
            }}
          >
            <ArrowRightAltIcon fontSize="medium" sx={{ color: amber[500] }} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
