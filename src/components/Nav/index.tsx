import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import Settings from '../Settings';

type DrawerContent = 'login' | 'settings';

function Nav(): JSX.Element {
  const navigate = useNavigate();

  const user = false;
  const admin = false;
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<DrawerContent>('settings');

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
    <div className="App">
      <div>
        <Container fixed>
          <IconButton
            aria-label="delete"
            onClick={() => {
              navigate('');
            }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          {user && (
            <IconButton aria-label="delete">
              <PersonIcon fontSize="large" />
            </IconButton>
          )}
          {admin && (
            <IconButton aria-label="delete">
              <AdminPanelSettingsIcon fontSize="large" />
            </IconButton>
          )}
          <IconButton aria-label="delete" onClick={toggleDrawer('settings', true)}>
            <SettingsIcon fontSize="large" />
          </IconButton>
          {!user && !admin && (
            <IconButton aria-label="delete" onClick={toggleDrawer('login', true)}>
              <LoginIcon fontSize="large" />
            </IconButton>
          )}
          {(user || admin) && (
            <IconButton aria-label="delete">
              <LogoutIcon fontSize="large" />
            </IconButton>
          )}
        </Container>
      </div>
      <div>
        <React.Fragment key={'right'}>
          <Drawer
            anchor={'right'}
            open={isOpenedDrawer}
            onClose={toggleDrawer(drawerContent, false)}
          >
            <Box
              sx={{ width: 300 }}
              role="presentation"
              onClick={toggleDrawer(drawerContent, false)}
              onKeyDown={toggleDrawer(drawerContent, false)}
            >
              {drawerContent === 'login' && <List>login</List>}
              {drawerContent === 'settings' && (
                <List>
                  <Settings />
                </List>
              )}
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
}

export default Nav;
