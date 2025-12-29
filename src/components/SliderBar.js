import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography, Fade, Grid } from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayArrow,
  Pause
} from '@mui/icons-material';

const SliderBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const slides = [
    {
      title: "Property Management System",
      subtitle: "Everything You Need in One Platform",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/sliderpms.jpg",
        alt: "Property Management System",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },




    {
      title: "Point of Sale System",
      subtitle: "Everything You Need in One Platform",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/pos.png",
        alt: "Property Management System",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },



    
    {
      title: "Education Management System",
      subtitle: "Complete platform for student registration, admissions, fees, vouchers, results, and academic records",
      description: "Streamline your educational institution operations with a reliable, scalable platform designed for schools and colleges.",
      image: {
        src: "/school.png",
        alt: "Education Management System",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/slider02.jpg",
        alt: "AI Analytics Dashboard",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },



    {
      title: "HRM (Payroll, Attendance, Leaves, etc.)",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/hrms.png",
        alt: "AI Analytics Dashboard",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },


    {
      title: "Mobile App Development",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/mobileapp.png",
        alt: "AI Analytics Dashboard",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },


    {
      title: "E-Commerce & Market Place",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/ecommerce.png",
        alt: "AI Analytics Dashboard",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    },

    {
      title: "Agentic AI",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/artifical.png",
        alt: "AI Analytics Dashboard",
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
      background: "white"
    }


 

  ];

  // Create slide pairs: [0,1] and [2,3]
  const slidePairs = [];
  for (let i = 0; i < slides.length; i += 2) {
    if (i + 1 < slides.length) {
      slidePairs.push([slides[i], slides[i + 1]]);
    } else {
      slidePairs.push([slides[i], slides[i]]); // If odd number, duplicate last slide
    }
  }

  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [autoPlay, slidePairs.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidePairs.length) % slidePairs.length);
  };

  return (
    <Box sx={{ position: 'relative', height: '500px', overflow: 'hidden', mt: -2 }}>
      {slidePairs.map((pair, pairIndex) => {
        const [leftSlide, rightSlide] = pair;
        return (
          <Fade 
            key={pairIndex}
            in={currentSlide === pairIndex}
            timeout={1000}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: leftSlide.background,
                display: 'flex',
                alignItems: 'center',
                color: '#002e5b'
              }}
            >
              {/* Using exact 50% width for both sides */}
              <Grid container sx={{ height: '100%', alignItems: 'center', width: '100%' }}>
                {/* Left Side - First Item */}
                <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                  <Box sx={{ 
                    padding: { xs: 4, md: 8 },
                    textAlign: { xs: 'center', md: 'left' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 3,
                        color: '#002e5b',
                        fontSize: { xs: '1.3rem', md: '1.6rem' }
                      }}
                    >
                      {leftSlide.title}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: { xs: '200px', md: '300px' },
                        borderRadius: '12px',
                        overflow: 'hidden',
                        backgroundColor: 'rgba(0, 46, 91, 0.05)',
                        border: '2px solid rgba(0, 46, 91, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img 
                        src={leftSlide.image.src} 
                        alt={leftSlide.image.alt}
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Placeholder if image doesn't exist */}
                      <Box 
                        sx={{ 
                          display: 'none',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#002e5b',
                          textAlign: 'center',
                          width: '100%',
                          padding: 2
                        }}
                      >
                        <Typography variant="body2">
                          {leftSlide.image.alt}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                
                {/* Right Side - Second Item */}
                <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                  <Box sx={{ 
                    padding: { xs: 4, md: 8 },
                    textAlign: { xs: 'center', md: 'left' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 'bold', 
                        mb: 3,
                        color: '#002e5b',
                        fontSize: { xs: '1.3rem', md: '1.6rem' }
                      }}
                    >
                      {rightSlide.title}
                    </Typography>
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        maxHeight: { xs: '200px', md: '300px' },
                        backgroundColor: 'rgba(0, 46, 91, 0.05)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '2px solid rgba(0, 46, 91, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img 
                        src={rightSlide.image.src} 
                        alt={rightSlide.image.alt}
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Placeholder if image doesn't exist */}
                      <Box 
                        sx={{ 
                          display: 'none',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#002e5b',
                          textAlign: 'center',
                          width: '100%',
                          padding: 2
                        }}
                      >
                        <Typography variant="body2">
                          {rightSlide.image.alt}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        );
      })}
      
      {/* Slide controls */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }
        }}
      >
        <KeyboardArrowRight />
      </IconButton>
      
      <IconButton
        onClick={() => setAutoPlay(!autoPlay)}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: '#002e5b',
          backgroundColor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }
        }}
      >
        {autoPlay ? <Pause /> : <PlayArrow />}
      </IconButton>
      
      {/* Slide indicators */}
      <Box sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1
      }}>
        {slidePairs.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: index === currentSlide ? '#002e5b' : 'rgba(0, 46, 91, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#002e5b'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderBar;