import React from 'react';
import { amber } from '@mui/material/colors';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const options = ['Sport', 'Games', 'Films', 'Books', 'Food', 'Places', 'Other'];

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField label="Title" variant="outlined" />
          <TextField multiline rows={4} placeholder="Description" />
          <Autocomplete
            multiple
            id="tags-standard"
            options={options}
            getOptionLabel={option => option}
            renderInput={params => (
              <TextField {...params} variant="outlined" placeholder="Topic" />
            )}
          />
        </Box>
      </Modal>
    </Container>
  );
}

export default UserPage;
