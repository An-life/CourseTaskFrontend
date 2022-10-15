import React, { useState } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Box from '@mui/material/Box';
import BlockIcon from '@mui/icons-material/Block';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Tooltip from '@mui/material/Tooltip';

import { ButtonOptions } from './types';

import styles from './styles.module.scss';

function AdminPanel(): JSX.Element {
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  console.log(selectionModel);
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: ' Name' },
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
    { title: 'Delete user/users', icon: <DeleteIcon />, onClick: onClickHandler },
    { title: 'Block user/users', icon: <PersonOffIcon />, onClick: onClickHandler },
    { title: 'Activate user/users', icon: <PersonAddIcon />, onClick: onClickHandler },
    {
      title: 'Add admin role for user/users',
      icon: <AdminPanelSettingsIcon />,
      onClick: onClickHandler,
    },
    {
      title: 'Take away admin role for user/users',
      icon: <BlockIcon />,
      onClick: onClickHandler,
    },
  ];

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
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
        {buttonOptions.map(({ title, icon, onClick }) => {
          return (
            <Tooltip title={title} key={title}>
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
