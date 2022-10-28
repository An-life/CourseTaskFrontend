import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import noImage from './../../../assets/images/noImage.png';
import { ExpandMoreProps, ICatalogCard } from './types';

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CollectionCard = ({ cardId, title }: ICatalogCard): JSX.Element => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const expandClickHandle = (): void => {
    setExpanded(!expanded);
  };

  const navigateClickHandle = (id: string): void => {
    navigate(`/collection/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={title} onClick={navigateClickHandle(cardId)} />
      <CardMedia component="img" height="170" image={noImage} alt="image" />
      <CardActions disableSpacing>
        <Typography variant="body2" color="text.secondary">
          Author: Me
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={expandClickHandle}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>Some text</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CollectionCard;
