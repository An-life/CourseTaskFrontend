import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Box from '@mui/material/Box';
import BlockIcon from '@mui/icons-material/Block';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import Tooltip from '@mui/material/Tooltip';

import { addUserData } from '../../store/user/userSlice';
import { ButtonOptions, IUsersData } from './types';
import { collectionData } from '../../constants/temporary';
import CollectionCard from '../common/CollectionCard';
import { getUserInfo } from '../../store/user/userSelectors';
import Title from '../common/Title';
import {
  useChangeUsersRoleMutation,
  useChangeUsersStatusMutation,
  useDeleteUsersMutation,
  useGetUsersQuery,
} from '../../api/authApi';

import styles from './styles.module.scss';

function AdminPanel(): JSX.Element {
  const [selectionModel, setSelectionModel] = useState<Array<string | number>>([]);
  const userData = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const { data, isFetching } = useGetUsersQuery();
  const [deleteUser] = useDeleteUsersMutation();
  const [changeStatus] = useChangeUsersStatusMutation();
  const [changeRole] = useChangeUsersRoleMutation();

  useEffect(() => {
    if (data?.length) {
      const user = data?.filter(item => item.userId === userData.id);
      dispatch(
        addUserData({
          id: user[0]?.userId,
          status: user[0]?.status,
          role: user[0]?.role,
        }),
      );
    }
  }, [data]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
    },
  ];

  const usersData: IUsersData[] | undefined = data?.map(
    ({ userId, name, email, role, status }) => ({
      id: userId,
      name,
      email,
      role,
      status,
    }),
  );

  const deleteUsersHandler = async (): Promise<void> => {
    await deleteUser(selectionModel as string[]);
  };

  const changeStatusHandler = async (value: string): Promise<void> => {
    await changeStatus({
      users: selectionModel as string[],
      status: value as 'active' | 'block',
    });
  };

  const changeRoleHandler = async (value: string): Promise<void> => {
    await changeRole({
      users: selectionModel as string[],
      role: value as 'admin' | 'user',
    });
  };

  const buttonOptions: ButtonOptions[] = [
    {
      id: 1,
      title: <FormattedMessage id="admin_block" />,
      value: 'block',
      icon: <PersonOffIcon />,
      onClick: changeStatusHandler,
    },
    {
      id: 2,
      title: <FormattedMessage id="admin_activate" />,
      value: 'active',
      icon: <PersonAddIcon />,
      onClick: changeStatusHandler,
    },
    {
      id: 3,
      title: <FormattedMessage id="admin_add" />,
      value: 'admin',
      icon: <AdminPanelSettingsIcon />,
      onClick: changeRoleHandler,
    },
    {
      id: 4,
      title: <FormattedMessage id="admin_takeAway" />,
      value: 'user',
      icon: <BlockIcon />,
      onClick: changeRoleHandler,
    },
  ];

  if (userData.role !== 'admin' || userData.status !== 'active') {
    return <Navigate to={'/'} />;
  }

  return (
    <Container fixed sx={{ maxWidth: 'xl' }}>
      <Title>
        <FormattedMessage id="admin_users" />
      </Title>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <>
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
            <Tooltip title={<FormattedMessage id="admin_delete" />}>
              <IconButton onClick={deleteUsersHandler}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            {buttonOptions.map(({ id, title, value, icon, onClick }) => {
              return (
                <Tooltip title={title} key={id}>
                  <IconButton onClick={() => onClick(value)}>{icon}</IconButton>
                </Tooltip>
              );
            })}
          </Box>
          <div className={styles.container}>
            {usersData != null && (
              <DataGrid
                rows={usersData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={newSelectionModel => {
                  setSelectionModel(newSelectionModel);
                }}
                selectionModel={selectionModel}
              />
            )}
          </div>
        </>
      )}
      <Title>
        <FormattedMessage id="admin_collections" />
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

export default AdminPanel;
