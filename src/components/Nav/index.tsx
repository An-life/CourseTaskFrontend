import React, { useState } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { amber } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import { FormattedMessage } from 'react-intl';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import Modal from '@mui/material/Modal';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import { DrawerContent, SettingsProps } from './types';
import Registration from '../Registration';
import Settings from '../Settings';

import styles from './styles.module.scss';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

function Nav({ changeSettings }: SettingsProps): JSX.Element {
  const navigate = useNavigate();
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<DrawerContent>('settings');
  const [isOpenedSearch, setIsOpenedSearch] = useState(false);

  const user = false;
  const admin = false;

  const toggleDrawer =
    (type: DrawerContent, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpenedDrawer(open);
      setDrawerContent(type);
    };

  return (
    <>
      <Container fixed sx={{ maxWidth: 'xl' }}>
        <div className={styles.container}>
          <div>
            <Tooltip title={<FormattedMessage id="nav_home" />}>
              <IconButton
                onClick={() => {
                  navigate('');
                }}
              >
                <HomeIcon fontSize="large" sx={{ color: amber[500] }} />
              </IconButton>
            </Tooltip>
            {user && (
              <Tooltip title={<FormattedMessage id="nav_user" />}>
                <IconButton
                  onClick={() => {
                    navigate('/userPage');
                  }}
                >
                  <PersonIcon fontSize="large" sx={{ color: amber[500] }} />
                </IconButton>
              </Tooltip>
            )}
            {admin && (
              <Tooltip title={<FormattedMessage id="nav_admin" />}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    navigate('/adminPanel');
                  }}
                >
                  <AdminPanelSettingsIcon fontSize="large" sx={{ color: amber[500] }} />
                </IconButton>
              </Tooltip>
            )}
          </div>
          <div>
            <Tooltip title={<FormattedMessage id="nav_search" />}>
              <IconButton onClick={() => setIsOpenedSearch(true)}>
                <SearchIcon fontSize="large" sx={{ color: amber[500] }} />
              </IconButton>
            </Tooltip>
            <Tooltip title={<FormattedMessage id="nav_settings" />}>
              <IconButton onClick={toggleDrawer('settings', true)}>
                <SettingsIcon fontSize="large" sx={{ color: amber[500] }} />
              </IconButton>
            </Tooltip>
            {!user && !admin && (
              <Tooltip title={<FormattedMessage id="nav_signin" />}>
                <IconButton onClick={toggleDrawer('login', true)}>
                  <LoginIcon fontSize="large" sx={{ color: amber[500] }} />
                </IconButton>
              </Tooltip>
            )}
            {(user || admin) && (
              <Tooltip title={<FormattedMessage id="nav_logout" />}>
                <IconButton>
                  <LogoutIcon fontSize="large" sx={{ color: amber[500] }} />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      </Container>
      <Drawer
        anchor={'right'}
        open={isOpenedDrawer}
        onClose={toggleDrawer(drawerContent, false)}
      >
        <Box sx={{ width: 300 }} role="presentation">
          <IconButton
            aria-label="close"
            onClick={toggleDrawer(drawerContent, false)}
            sx={{ margin: '0px 5px 0px  250px' }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
          <h3 className={styles.title}>
            {drawerContent === 'login' ? (
              <FormattedMessage id="drawer_registration" />
            ) : (
              <FormattedMessage id="drawer_settings" />
            )}
          </h3>
          <List>
            {drawerContent === 'login' ? (
              <Registration />
            ) : (
              <Settings changeSettings={changeSettings} />
            )}
          </List>
        </Box>
      </Drawer>
      <Modal open={isOpenedSearch} onClose={() => setIsOpenedSearch(false)}>
        <Box sx={style}>
          <Autocomplete
            disablePortal
            options={[
              { label: 'The Shawshank Redemption', year: 1994 },
              { label: 'The Godfather', year: 1972 },
            ]}
            renderInput={params => <TextField {...params} label={<SearchIcon />} />}
          />
        </Box>
      </Modal>
    </>
  );
}

export default Nav;
