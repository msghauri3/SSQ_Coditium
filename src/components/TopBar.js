import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

const TopBar = () => {
  const projectNames = [
    "Data Scraping & Web Automation",
    "Voice Assistant Development",
    "Voice Chatbot",
    "AI Powered Analytics Dashboard",
    "Data Analytics & Dashboards"
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        minHeight: '40px', // Reduced height
        py: 0.5 // Reduced padding
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        minHeight: '40px !important', // Force reduced height
        width: '100%'
      }}>
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center'
        }}>
          <img 
            src="/logo02.png"
            alt="Company Logo" 
            style={{ 
              width: '200px',
              height: '60px',
              objectFit: 'contain'
            }}
          />
        </Box>
        
        {/* Scrolling Project Names */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            overflow: 'hidden',
            ml: 4,
            position: 'relative',
            width: '100%',
            height: '40px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              animation: 'scroll 25s linear infinite',
              whiteSpace: 'nowrap',
              '@keyframes scroll': {
                '0%': {
                  transform: 'translateX(0)'
                },
                '100%': {
                  transform: 'translateX(-50%)'
                }
              }
            }}
          >
            {[...projectNames, ...projectNames].map((name, index) => (
              <Typography
                key={index}
                variant="body2"
                component="span"
                sx={{
                  color: '#002e5b',
                  fontWeight: 500,
                  mr: 4,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  display: 'inline-block'
                }}
              >
                {name} •
              </Typography>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;