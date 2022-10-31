import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { amber } from '@mui/material/colors';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { ExpandMore } from '../../../utils/expandMore';
import noImage from './../../../assets/images/noImage.png';
import { ICatalogCard } from './types';

const CollectionCard = ({
  title,
  user,
  topic,
  description,
}: ICatalogCard): JSX.Element => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="150" image={noImage} alt="Collection image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <SentimentVerySatisfiedIcon fontSize="small" sx={{ color: amber[500] }} />
          Author: {user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <AutoStoriesIcon fontSize="small" sx={{ color: amber[500] }} />
          Topic: {topic}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={<FormattedMessage id="main_go_to_collection" />}>
          <IconButton
            onClick={() => {
              navigate('/collection/6');
            }}
          >
            <ArrowRightAltIcon fontSize="medium" sx={{ color: amber[500] }} />
          </IconButton>
        </Tooltip>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CollectionCard;
