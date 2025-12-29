import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button,
  Divider
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook />, color: '#1877F2' },
    { name: 'Twitter', icon: <Twitter />, color: '#1DA1F2' },
    { name: 'Instagram', icon: <Instagram />, color: '#E4405F' },
    { name: 'LinkedIn', icon: <LinkedIn />, color: '#0077B5' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#002e5b', 
        color: 'white',
        py: 6,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Us Column */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                color: 'white'
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  p: 1,
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Phone sx={{ fontSize: '20px', color: 'white' }} />
              </Box>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                +92 (333) 519-1392
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  p: 1,
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Email sx={{ fontSize: '20px', color: 'white' }} />
              </Box>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                info@coditium.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  p: 1,
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <LocationOn sx={{ fontSize: '20px', color: 'white' }} />
              </Box>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Bahria Town, Karachi
              </Typography>
            </Box>
          </Grid>

          {/* Follow Us Column */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                color: 'white'
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="contained"
                  startIcon={social.icon}
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    px: 2,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    },
                    '& .MuiSvgIcon-root': {
                      color: social.color
                    }
                  }}
                >
                  {social.name}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Copyright */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.9rem'
          }}
        >
          © {new Date().getFullYear()} Coditium. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
