import React, { useState, useEffect } from 'react';
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
import { Link } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';
import BrightnessToggle from '../common/BrightnessToggle';
import { HashLink } from 'react-router-hash-link';
import { Colors } from '../../utils/Colors';

const pages = [
  { to: '/#about', page: 'About' },
  { to: '/#expertise', page: 'Expertise' },
  { to: '/#journey', page: 'My Journey' },
  { to: '/#projects', page: 'Projects' },
  { to: '/#contact', page: 'Contact' },
];

const Header = ({ setBrightnessToggle }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [toggleChecked, setToggleChecked] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleBrightnessToggle = (event) => {
    localStorage.setItem('theme', event.target.checked);
    setToggleChecked(event.target.checked);
    setBrightnessToggle(event.target.checked);
  };

  const getBrightnessMode = () => {
    let theme = localStorage.getItem('theme');
    if (theme === 'true') {
      setToggleChecked(true);
    } else if (theme === 'false') {
      setToggleChecked(false);
    } else {
      setToggleChecked(true);
    }
  };

  useEffect(() => {
    getBrightnessMode();
  }, []);

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{ padding: 4, bgcolor: 'background.default' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Link
            component={ReactLink}
            to='/'
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
              color='primary'
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
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  component={HashLink}
                  smooth
                  to={page.to}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign='center'>{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            justifyContent='center'
            alignItems='center'
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            {/* <Link
              href='/'
              sx={{
                mr: 2,
              }}
            >
              <img
                src='/assets/images/logo.png'
                alt='Logo'
                height={70}
                width={50}
              />
            </Link> */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <BrightnessToggle
                checked={toggleChecked}
                onChange={handleBrightnessToggle}
              />
            </Box>
          </Box>

          <Box
            justifyContent='flex-end'
            alignItems='center'
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                disableRipple
                component={HashLink}
                smooth
                to={page.to}
                sx={{
                  mr: 1,
                  '&:hover': {
                    background: Colors.transparent,
                  },
                }}
              >
                {page.page}
              </Button>
            ))}

            {/* <Box ml={2} mr={2}>
              <RoundedButton text={'Resume'} />
            </Box> */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <BrightnessToggle
                checked={toggleChecked}
                onChange={handleBrightnessToggle}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
