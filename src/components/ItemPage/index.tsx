import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import Title from '../common/Title';

import styles from './styles.module.scss';

function ItemPage(): JSX.Element {
  const [liked, setLiked] = useState(false);
  const tegs: string[] = [
    'culture',
    'literature',
    'traveling',
    'hobby',
    'interesting',
    'education',
  ];

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Title>ItemTitle</Title>
      <div className={styles.container}>
        <Title>#</Title>
        <div>
          {tegs.map(teg => (
            <Chip key={teg} label={teg} variant="outlined" />
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <IconButton
          onClick={() => {
            setLiked(!liked);
          }}
        >
          {liked ? (
            <FavoriteIcon fontSize="large" sx={{ color: pink[300] }} />
          ) : (
            <FavoriteBorderIcon fontSize="large" sx={{ color: pink[500] }} />
          )}
        </IconButton>
        <Title>0</Title>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FormattedMessage id="item_description" />
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
          lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Title>
        <FormattedMessage id="item_comments" />
      </Title>
      <TextField fullWidth label="Comments" placeholder="Enter your comment..." />
      <IconButton
        onClick={() => {
          setLiked(!liked);
        }}
      >
        <SendIcon fontSize="large" sx={{ color: pink[500] }} />
      </IconButton>
    </Container>
  );
}

export default ItemPage;
