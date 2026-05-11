import { useState } from 'react';
import {
  Box,
} from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import palette from '../theme/palette.jsx';
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
      <Box sx={{minHeight:"50vh"}}>
      {children}
      </Box>
      <Footer />
    </Box>
  );
}
