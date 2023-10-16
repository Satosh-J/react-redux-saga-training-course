import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Import for react router links
import { Link, NavLink } from 'react-router-dom';

import { authenticate } from '../api/authenticate';
import { authorize } from '../api/authorize';
import { useAuthContext } from '../AuthContext';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const { user, loading, dispatch } = useAuthContext();
  async function handleSignInClick() {
    dispatch({ type: "authenticate" });
    const authenticatedUser = await authenticate();
    dispatch({
      type: "authenticated",
      user: authenticatedUser,
    });
    if (authenticatedUser !== undefined) {
      dispatch({ type: "authorize" });
      const authorizedPermissions = await authorize(
        authenticatedUser.id
      );
      dispatch({
        type: "authorized",
        permissions: authorizedPermissions,
      });
    }
  }

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
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to=""
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              iBASEt
            </Link>
          </Typography>

          <Box flexGrow={0} gap={2} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            {user &&
              <>
                <NavLink
                  to="/users"
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
                <NavLink
                  to="/admin"
                  style={({ isActive }) => {
                    return {
                      textDecoration: 'none',
                      color: 'white',
                      ...(isActive && { fontSize: '1.2rem' })
                    }
                  }}
                >
                  Admin
                </NavLink>
              </>
            }
          </Box>
          <Box flexGrow={1}>
          </Box>
          {
            user ?
              <Box sx={{ flexGrow: 0 }}>
                {/* <Tooltip title="Open settings"> */}
                {user.name} signed in.
                {/* </Tooltip> */}
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
              </Box> : <LoadingButton
                onClick={handleSignInClick}
                loading={loading}
                sx={{
                  bgcolor: 'white',
                  ':hover': {
                    bgcolor: 'primary.main', // theme.palette.primary.main
                    color: 'white',
                  },
                }}
              >
                Sign In
              </LoadingButton>
          }
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default NavBar;
