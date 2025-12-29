import React, { useState } from 'react';
import { Paper, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const LinksBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  
  const tabs = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'AI', path: '/about' },
    { id: 'services', label: 'Our Team', path: '/services' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
    { id: 'coditium-services', label: 'Services', path: '/coditium-services' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  // Update activeTab when location changes
  React.useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveTab('home');
    } else {
      setActiveTab(currentPath.slice(1));
    }
  }, [location.pathname]);

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        borderRadius: 0,
        backgroundColor: '#002e5b',
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        alignItems: 'center',
        py: 1.5,
        pl: 0
      }}>
        {/* Links aligned to the left */}
        <Box sx={{ display: 'flex' }}>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              component={Link}
              to={tab.path}
              onClick={() => setActiveTab(tab.id)}
              sx={{
                color: activeTab === tab.id ? 'white' : 'rgba(255, 255, 255, 0.8)',
                borderBottom: activeTab === tab.id ? '3px solid' : '3px solid transparent',
                borderColor: 'white',
                borderRadius: 0,
                px: 3,
                transition: 'all 0.3s ease',
                fontSize: '0.9rem',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default LinksBar;