import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import RoundedButton from '../common/RoundedButton';
import { Link } from '@mui/material';

const pages = ['About', 'Expertise', 'Journey', 'Projects', 'Contact'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{ padding: 4, background: '#ffffffff' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img
              src='/assets/images/logo.png'
              alt='Logo'
              height={70}
              width={50}
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <img
              src='/assets/images/logo.png'
              alt='Logo'
              height={70}
              width={50}
            />
          </Link>
          <Box
            justifyContent='flex-end'
            alignItems='center'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Box ml={2}>
              <RoundedButton text={'Resume'} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
