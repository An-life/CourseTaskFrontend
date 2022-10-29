import React from 'react';
import { FormattedMessage } from 'react-intl';

import { amber } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Tooltip from '@mui/material/Tooltip';

import AddCollection from '../common/AddCollection';

function UserPage(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Tooltip title={<FormattedMessage id="user_page_add" />}>
        <IconButton onClick={handleOpen}>
          <LibraryAddIcon fontSize="large" sx={{ color: amber[700] }} />
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose} style={{ overflow: 'auto' }}>
        <div>
          <AddCollection />
        </div>
      </Modal>
    </Container>
  );
}

export default UserPage;
