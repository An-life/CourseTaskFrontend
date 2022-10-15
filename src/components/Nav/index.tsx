import React, { useContext, useState } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import List from '@mui/material/List';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

import { Context } from '../../context/settingsContext';
import { DrawerContent, SettingsProps } from './types';
import Registration from '../Registration';
import Settings from '../Settings';

import styles from './styles.module.scss';

function Nav({ changeSettings }: SettingsProps): JSX.Element {
  const { theme } = useContext(Context);
  console.log(theme, 'nav');
  const navigate = useNavigate();
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<DrawerContent>('settings');

  const user = false;
  const admin = true;

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
            <Tooltip title="Home page">
              <IconButton
                aria-label="delete"
                onClick={() => {
                  navigate('');
                }}
              >
                <HomeIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            {user && (
              <Tooltip title="User page">
                <IconButton aria-label="delete">
                  <PersonIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
            {admin && (
              <Tooltip title="Admin page">
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    navigate('/adminPanel');
                  }}
                >
                  <AdminPanelSettingsIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
          </div>
          <div>
            <Tooltip title="Settings">
              <IconButton aria-label="delete" onClick={toggleDrawer('settings', true)}>
                <SettingsIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            {!user && !admin && (
              <Tooltip title="Sign in">
                <IconButton aria-label="delete" onClick={toggleDrawer('login', true)}>
                  <LoginIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
            {(user || admin) && (
              <Tooltip title="Log out">
                <IconButton aria-label="delete">
                  <LogoutIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      </Container>
      <React.Fragment key={'right'}>
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
            <List>
              {drawerContent === 'login' ? (
                <Registration />
              ) : (
                <Settings changeSettings={changeSettings} />
              )}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
}

export default Nav;
