import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { amber, pink } from '@mui/material/colors';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import Title from '../common/Title';
import { tags } from '../../constants/temporary';

import styles from './styles.module.scss';

function ItemPage(): JSX.Element {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const onSubmitHandler = (): void => {
    setComments([...comments, comment]);
    setComment('');
  };

  const removeCommentHandler = (value: string): void => {
    const filteredComments = comments?.filter(item => item !== value);

    setComments(filteredComments);
  };

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Title>ItemTitle</Title>
      <div className={styles.container}>
        <Title>#</Title>
        <div>
          {tags.map(teg => (
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            maxWidth: 800,
          }}
        >
          <TextField
            fullWidth
            label="Comments"
            placeholder="Enter your comment..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </Box>
        <IconButton type="submit" onClick={onSubmitHandler}>
          <SendIcon fontSize="large" sx={{ color: pink[500] }} />
        </IconButton>
      </Box>
      <Box>
        {comments?.map(item => {
          return (
            <div key={item} className={styles.message}>
              {item}
              <Tooltip title={<FormattedMessage id="item_field_delete" />}>
                <IconButton onClick={() => removeCommentHandler(item)}>
                  <RemoveCircleOutlineIcon fontSize="small" sx={{ color: amber[700] }} />
                </IconButton>
              </Tooltip>
            </div>
          );
        })}
      </Box>
    </Container>
  );
}

export default ItemPage;
