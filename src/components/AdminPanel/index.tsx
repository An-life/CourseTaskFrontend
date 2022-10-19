import React, { useState } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Box from '@mui/material/Box';
import BlockIcon from '@mui/icons-material/Block';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Tooltip from '@mui/material/Tooltip';

import { ButtonOptions } from './types';

import styles from './styles.module.scss';
import Title from '../common/Title';

function AdminPanel(): JSX.Element {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'role', headerName: 'Role' },
    {
      field: 'status',
      headerName: 'Status',
    },
  ];

  const rows = [
    { id: '1', name: 'Snow', email: 'ffff', role: 'admin', status: 'active' },
    { id: '2', name: 'Fil', email: 'ffff', role: 'user', status: 'active' },
    { id: '3', name: 'Serg', email: 'ffff', role: 'user', status: 'blocked' },
    { id: '4', name: 'Nino', email: 'ffff', role: 'user', status: 'active' },
  ];

  const onClickHandler = (): void => {
    console.log('hi');
  };

  const buttonOptions: ButtonOptions[] = [
    {
      id: 1,
      title: <FormattedMessage id="admin_delete" />,
      icon: <DeleteIcon />,
      onClick: onClickHandler,
    },
    {
      id: 2,
      title: <FormattedMessage id="admin_block" />,
      icon: <PersonOffIcon />,
      onClick: onClickHandler,
    },
    {
      id: 3,
      title: <FormattedMessage id="admin_activate" />,
      icon: <PersonAddIcon />,
      onClick: onClickHandler,
    },
    {
      id: 4,
      title: <FormattedMessage id="admin_add" />,
      icon: <AdminPanelSettingsIcon />,
      onClick: onClickHandler,
    },
    {
      id: 5,
      title: <FormattedMessage id="admin_takeAway" />,
      icon: <BlockIcon />,
      onClick: onClickHandler,
    },
  ];

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Title>
        <FormattedMessage id="admin_users" />
      </Title>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'raw',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        {buttonOptions.map(({ id, title, icon, onClick }) => {
          return (
            <Tooltip title={title} key={id}>
              <IconButton onClick={onClick}>{icon}</IconButton>
            </Tooltip>
          );
        })}
      </Box>
      <div className={styles.container}>
        <DataGrid
          rows={rows}
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

export default AdminPanel;
