import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Import for react router links
import { NavLink } from 'react-router-dom';

import avatar from '../assets/react.svg'


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            iBASEt
          </Typography>

          <Box flexGrow={0} gap={2} display={'flex'} justifyContent={'center'} alignItems={'center'} >

            <NavLink
              to="welcome"
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  color: 'white',
                  ...(isActive && { fontSize: '1.2rem' })
                }
              }}
            >
              Welcome
            </NavLink>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  textDecoration: 'none',
                  color: 'white',
                  ...(isActive && { fontSize: '1.2rem' })
                }
              }}
            >
              Users
            </NavLink>
          </Box>
          <Box flexGrow={1}>
            <Typography
              variant="h5"
              noWrap
              textTransform={'uppercase'}
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Users
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default NavBar;
