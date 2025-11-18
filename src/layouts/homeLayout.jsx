import { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Navbar from '../components/Navbar.jsx';
import palette from '../theme/palette.jsx';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer.jsx';

const drawerWidth = 300;

export default function HomeLayout({ children }) {

  return (
    <Box sx={{
      textAlign: 'center',
      backgroundColor: palette.primaryDark,
      minHeight: '100vh',
    }}>
      <Navbar/>
      {children}
      <Footer />
    </Box>
  );
}
