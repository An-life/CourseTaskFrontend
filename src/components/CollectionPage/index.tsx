import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { amber } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CreateIcon from '@mui/icons-material/Create';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';

import AddCollection from '../common/AddCollection';
import { itemsDataTable } from '../../constants/temporary';
import Title from '../common/Title';

import styles from './styles.module.scss';

function CollectionPage(): JSX.Element {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formCondition, setFormCondition] = useState('collection');
  const [selectionModel, setSelectionModel] = useState<Array<string | number>>([]);

  const closeModalHandler = (): void => setOpen(false);

  const changeCollectionHandler = (): void => {
    setFormCondition('collection');
    setOpen(true);
  };

  const addItemHandler = (): void => {
    setFormCondition('item');
    setOpen(true);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'tags', headerName: 'Tags', width: 150 },
  ];

  const collectionData = [
    { title: 'Title:', value: 'Films' },
    { title: 'Topic:', value: 'Drama' },
    { title: 'Author:', value: 'Me' },
    { title: 'Description:', value: 'Interesting' },
  ];

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Title>
          <FormattedMessage id="collection" />
        </Title>
        <Box>
          <Tooltip title={<FormattedMessage id="collection_delete" />}>
            <IconButton onClick={() => navigate('/userPage')}>
              <DeleteIcon fontSize="large" sx={{ color: amber[500] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title={<FormattedMessage id="collection_change" />}>
            <IconButton onClick={changeCollectionHandler}>
              <CreateIcon fontSize="large" sx={{ color: amber[500] }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {collectionData.map(({ title, value }) => {
        return (
          <div key={title} className={styles.container}>
            {title}
            <span className={styles.font}>{value}</span>
          </div>
        );
      })}

      <Title>Items</Title>
      <Box>
        <Tooltip title={<FormattedMessage id="item_delete" />}>
          <IconButton>
            <DeleteIcon fontSize="medium" sx={{ color: amber[500] }} />
          </IconButton>
        </Tooltip>
        <Tooltip title={<FormattedMessage id="item_add" />}>
          <IconButton onClick={addItemHandler}>
            <AddCircleIcon fontSize="medium" sx={{ color: amber[500] }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Modal open={open} onClose={closeModalHandler} style={{ overflow: 'auto' }}>
        <div>
          {formCondition === 'collection' && (
            <AddCollection initialTitle="hi" initialDescription="hi" formType="change" />
          )}
          {formCondition === 'item' && <div>hi</div>}
        </div>
      </Modal>
      <div className={styles.table}>
        <DataGrid
          rows={itemsDataTable}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={newSelectionModel => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
    </Container>
  );
}

export default CollectionPage;
