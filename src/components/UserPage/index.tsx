import React from 'react';
import { FormattedMessage } from 'react-intl';

import { amber } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Tooltip from '@mui/material/Tooltip';

import AddCollection from '../common/AddCollection';
import { collectionData } from '../../constants/temporary';
import CollectionCard from '../common/CollectionCard';
import Title from '../common/Title';

function UserPage(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const openModalHandler = (): void => setOpen(true);
  const closeModalHandler = (): void => setOpen(false);

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Tooltip title={<FormattedMessage id="user_page_add" />}>
        <IconButton onClick={openModalHandler}>
          <LibraryAddIcon fontSize="large" sx={{ color: amber[700] }} />
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={closeModalHandler} style={{ overflow: 'auto' }}>
        <div>
          <AddCollection initialTitle="" initialDescription="" formType="add" />
        </div>
      </Modal>
      <Title>
        <FormattedMessage id="user_collections" />
      </Title>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 5,
        }}
      >
        {collectionData.map(({ title, user, topic, description }) => {
          return (
            <div key={title}>
              <CollectionCard
                title={title}
                user={user}
                topic={topic}
                description={description}
              />
            </div>
          );
        })}
      </Box>
    </Container>
  );
}

export default UserPage;
