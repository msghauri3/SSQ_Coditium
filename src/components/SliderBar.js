import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  IconButton, 
  Typography, 
  Fade, 
  Grid, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  TextField,
  Avatar,
  useMediaQuery,  // Add this
  useTheme        // Add this
} from '@mui/material';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  PlayArrow,
  Pause,
  Close,
  Launch,
  Info,
  CalendarToday,
  Email,
  Phone,
  Person,
  Business,
  Description 
} from '@mui/icons-material';

   


const SliderBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDemoDialog, setOpenDemoDialog] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });
  const featuresRef = useRef(null);
    // ✅ Correct placement - inside the component function
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const textFieldStyle = {
  width: '100%',
  '& .MuiFormControl-root': {
    width: '100%'
  },
  '& .MuiOutlinedInput-root': {
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#f8fafc'
  }
};

  
  const slides = [
    {
      id: 1,
      title: "Property Management System",
      subtitle: "Secure, Cloud-Based Solution for Modern Property Owners",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/sliderpms.jpg",
        alt: "Property Management System",
      },
      fullDescription: `Our Property Management System is a secure, cloud-based solution designed to help landlords and property managers efficiently manage rental properties, tenants, payments, and maintenance from one centralized platform.

Whether you manage residential, commercial, or student housing, our property management software simplifies daily operations and improves financial visibility.

Our online property management system is built to reduce manual work, improve organization, and support business growth.`,
      category: "Property Management",
      technologies: ["React", "Node.js", "MongoDB", "Cloud-Based", "Secure API"],
      features: [
        "Centralized Property & Unit Management",
        "Tenant & Lease Management", 
        "Rent & Payment Tracking",
        "Maintenance Request System",
        "Real-time Dashboard & Reports",
        "Secure Data Management",
        "Scalable for Growing Portfolios"
      ],
      background: "white",
      liveUrl: "",
      githubUrl: "#",
      keyBenefits: [
        "Centralized rental property management",
        "Real-time tenant and lease tracking",
        "Accurate rent and payment monitoring",
        "Streamlined maintenance management",
        "Scalable solution for growing portfolios"
      ],
      valueProposition: "Designed for Modern Property Management - Managing properties shouldn't be complicated. Our Property Management System brings together property data, tenants, payments, and maintenance into one streamlined platform, helping you save time, minimize errors, and make informed decisions.",
      mission: "To make property management simple, transparent, and stress-free using smart digital solutions.",
      targetUsers: [
        "Landlords",
        "Property managers",
        "Real estate agencies",
        "Student housing & hostels",
        "Small to medium property owners"
      ],
      contactInfo: {
        email: "info@property-system.com",
        phone: "+123 456 7890",
        address: "Your City, Your Country"
      },
      detailedFeatures: [
        {
          icon: "🏠",
          title: "Centralized Property & Unit Management",
          items: [
            "Manage multiple properties and units",
            "Track availability and occupancy",
            "Update property details easily"
          ]
        },
        {
          icon: "👤",
          title: "Tenant Management",
          items: [
            "Store tenant information securely",
            "Assign tenants to units",
            "Track lease start and end dates"
          ]
        },
        {
          icon: "🛠️",
          title: "Maintenance Requests",
          items: [
            "Tenants can submit maintenance issues",
            "Track request status",
            "Assign tasks to maintenance staff"
          ]
        },
        {
          icon: "💳",
          title: "Rent & Payment Tracking",
          items: [
            "Monitor rent payments",
            "View paid and unpaid balances",
            "Generate payment reports"
          ]
        },
        {
          icon: "📊",
          title: "Reports & Dashboard",
          items: [
            "Occupancy reports",
            "Payment summaries",
            "Maintenance history"
          ]
        }
      ],
      whyChooseUs: [
        "Saves time and reduces manual work",
        "Improves tenant communication",
        "Enhances operational transparency",
        "Scales with your property portfolio",
        "Keeps all records in one place",
        "Easy to use for beginners",
        "Secure data management and compliant data handling"
      ]
    },
    {
      id: 2,
      title: "Point of Sale System",
      subtitle: "Everything You Need in One Platform",
      description: "Streamline your entire property business operations with a comprehensive platform designed for reliability, efficiency, and seamless user experience.",
      image: {
        src: "/pos.png",
        alt: "Point of Sale System",
      },
      fullDescription: "A comprehensive Point of Sale system with inventory management, sales tracking, and detailed reporting for retail businesses. Perfect for retail stores, restaurants, and small businesses looking to streamline their operations.",
      category: "POS System",
      technologies: ["React", "Express.js", "MySQL", "Stripe API"],
      features: ["Inventory Management", "Sales Tracking", "Reporting", "Payment Integration"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Education Management System",
      subtitle: "Complete platform for student registration, admissions, fees, vouchers, results, and academic records",
      description: "Streamline your educational institution operations with a reliable, scalable platform designed for schools and colleges.",
      image: {
        src: "/school.png",
        alt: "Education Management System",
      },
      fullDescription: "A comprehensive educational platform for managing student registration, admissions, fees, academic records and results. Ideal for schools, colleges, and educational institutions looking to digitize their operations.",
      category: "Education System",
      technologies: ["Vue.js", "Firebase", "Google Maps API", "Real-time Updates"],
      features: ["Student Management", "Fee Collection", "Academic Records", "Result Processing"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/slider02.jpg",
        alt: "AI Analytics Dashboard",
      },
      fullDescription: "An intelligent analytics dashboard powered by AI, providing real-time insights, predictive analytics, and data visualization for informed decision-making. Transform your data into actionable intelligence with enterprise-grade AI analytics.",
      category: "Analytics Platform",
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      features: ["Real-time Insights", "Predictive Analytics", "Data Visualization", "AI-powered"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "HRM (Payroll, Attendance, Leaves, etc.)",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/hrms.png",
        alt: "HR Management System",
      },
      fullDescription: "A comprehensive Human Resource Management system handling payroll, attendance, leaves, and employee management. Perfect for businesses looking to automate their HR processes and improve efficiency.",
      category: "HR Management",
      technologies: ["Angular", "Python", "SQLite", "Twilio API"],
      features: ["Payroll Management", "Attendance Tracking", "Leave Management", "Employee Records"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Mobile App Development",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/mobileapp.png",
        alt: "Mobile App Development",
      },
      fullDescription: "Custom mobile application development for iOS and Android platforms with native and cross-platform solutions. We build high-performance mobile apps that deliver exceptional user experiences.",
      category: "Mobile Development",
      technologies: ["React Native", "Flutter", "Firebase", "REST APIs"],
      features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "E-Commerce & Market Place",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/ecommerce.png",
        alt: "E-Commerce Platform",
      },
      fullDescription: "A full-featured e-commerce platform with marketplace capabilities, payment integration, and inventory management. Build your online store with our comprehensive e-commerce solutions.",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Product Management", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Agentic AI",
      subtitle: "Real-time insights, predictive analytics, and intelligent data visualization for smart decision-making",
      description: "Transform your data into actionable intelligence with enterprise-grade AI analytics that drive strategic business outcomes.",
      image: {
        src: "/artifical.png",
        alt: "Agentic AI Platform",
      },
      fullDescription: "Advanced AI agents for automating business processes, customer service, and decision-making workflows. Leverage the power of AI to transform your business operations.",
      category: "AI Solutions",
      technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
      features: ["Automated Workflows", "Natural Language Processing", "Decision Support", "API Integration"],
      background: "white",
      liveUrl: "",
      githubUrl: "#"
    }
  ];

  // Create slide pairs
  const slidePairs = [];
  for (let i = 0; i < slides.length; i += 2) {
    if (i + 1 < slides.length) {
      slidePairs.push([slides[i], slides[i + 1]]);
    } else {
      slidePairs.push([slides[i], null]);
    }
  }

  useEffect(() => {
    let timer;
    if (autoPlay && slidePairs.length > 0) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
      }, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, slidePairs.length]);

  const handleNext = () => {
    if (slidePairs.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % slidePairs.length);
    }
  };

  const handlePrev = () => {
    if (slidePairs.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + slidePairs.length) % slidePairs.length);
    }
  };

  const handleProjectClick = (project) => {
    if (project) {
      setSelectedProject(project);
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const handleOpenDemoDialog = () => {
    setOpenDemoDialog(true);
  };

  const handleCloseDemoDialog = () => {
    setOpenDemoDialog(false);
    setDemoForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      requirements: ''
    });
  };

  const handleDemoFormChange = (e) => {
    setDemoForm({
      ...demoForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    console.log('Demo Request Submitted:', demoForm);
    // Add your API call here
    handleCloseDemoDialog();
    alert('Demo request submitted successfully! We will contact you soon.');
  };

  const handleOpenDetailsPage = () => {
    if (selectedProject && selectedProject.id === 1) {
      window.open('/property-management-details', '_blank');
      handleCloseDialog();
    }
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Early return if no slides
  if (!slides || slides.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>No slides available</Typography>
      </Box>
    );
  }

  const renderDialogContent = () => {
  if (!selectedProject) return null;

  if (selectedProject.id === 1) {
    return (
      <>
        <DialogTitle sx={{ m: 0, p: 3, pb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
              {selectedProject.title}
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Box>
          <Typography variant="h6" sx={{ color: '#002e5b', mt: 1, fontWeight: 500 }}>
            {selectedProject.subtitle}
          </Typography>
          <Chip
            label={selectedProject.category}
            sx={{
              mt: 1,
              backgroundColor: '#002e5b',
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </DialogTitle>

        <DialogContent
          dividers
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            maxHeight: '80vh',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {/* Left: Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
              boxSizing: 'border-box',
              minHeight: { xs: '250px', md: 'auto' }
            }}
          >
            <Box
              component="img"
              src={selectedProject.image.src}
              alt={selectedProject.image.alt}
              sx={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 46, 91, 0.1)',
                backgroundColor: 'white'
              }}
            />
          </Box>

          {/* Right: Scrollable Text */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              padding: 3,
              boxSizing: 'border-box',
              // Make sure height fills DialogContent for scrolling
              maxHeight: '80vh',
              color: '#002e5b'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: '1.8rem',
              }}
            >
              Property Management Software for Modern Property Owners
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {selectedProject.fullDescription}
            </Typography>
          </Box>
        </DialogContent>
      </>
    );
  }

  // For other projects, existing content or similar approach
  return (
    <>
      <DialogTitle sx={{ m: 0, p: 3, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#002e5b' }}>
            {selectedProject.title}
          </Typography>
          <IconButton onClick={handleCloseDialog}>
            <Close />
          </IconButton>
        </Box>
        <Chip
          label={selectedProject.category}
          sx={{
            mt: 1,
            backgroundColor: '#002e5b',
            color: 'white'
          }}
        />
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        <Box
          sx={{
            width: '100%',
            height: '250px',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'rgba(0, 46, 91, 0.05)',
            border: '2px solid rgba(0, 46, 91, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}
        >
          <img
            src={selectedProject.image.src}
            alt={selectedProject.image.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        </Box>

        <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3 }}>
          {selectedProject.fullDescription}
        </Typography>
      </DialogContent>
    </>
  );
};



// Demo Request Dialog
const renderDemoDialog = () => (
  <Dialog
    open={openDemoDialog}
    onClose={handleCloseDemoDialog}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        maxWidth: { xs: '95%', sm: '600px' },
        width: { xs: '95%', sm: '600px' },
        borderRadius: '12px',
        overflow: 'hidden'
      }
    }}
  >
    <DialogTitle sx={{ 
      m: 0, 
      p: { xs: 2, sm: 3 }, 
      backgroundColor: '#002e5b', 
      color: 'white' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        gap: { xs: 1, sm: 0 }
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CalendarToday sx={{ mr: 2, fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1.25rem', sm: '1.5rem' }
          }}>
            Request a Demo
          </Typography>
        </Box>
        <IconButton 
          onClick={handleCloseDemoDialog} 
          sx={{ 
            color: 'white',
            alignSelf: { xs: 'flex-end', sm: 'center' },
            mt: { xs: -6, sm: 0 }
          }}
        >
          <Close fontSize={isSmallScreen ? "small" : "medium"} />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ 
        mt: 1, 
        opacity: 0.9,
        fontSize: { xs: '0.875rem', sm: '0.9rem' }
      }}>
        Fill the form below and we'll schedule a personalized demo
      </Typography>
    </DialogTitle>

    <form onSubmit={handleSubmitDemo}>
      <DialogContent sx={{ 
        p: { xs: 2, sm: 3, md: 4 },
        '& .MuiTextField-root': {
          width: '100%'
        }
      }}>
        

        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            p: 1
          }}
        >

          {/* FULL NAME */}
          <Grid item xs={12}>
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                required
                name="name"
                label="Full Name"
                value={demoForm.name}
                onChange={handleDemoFormChange}
                InputProps={{
                  startAdornment: (
                    <Person sx={{ mr: 1.5, color: '#002e5b' }} />
                  )
                }}
                sx={textFieldStyle}
              />
            </Box>
          </Grid>

          {/* EMAIL */}
          <Grid item xs={12}>
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                required
                type="email"
                name="email"
                label="Email Address"
                value={demoForm.email}
                onChange={handleDemoFormChange}
                InputProps={{
                  startAdornment: (
                    <Email sx={{ mr: 1.5, color: '#002e5b' }} />
                  )
                }}
                sx={textFieldStyle}
              />
            </Box>
          </Grid>

          {/* PHONE */}
          <Grid item xs={12}>
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                required
                name="phone"
                label="Phone Number"
                value={demoForm.phone}
                onChange={handleDemoFormChange}
                InputProps={{
                  startAdornment: (
                    <Phone sx={{ mr: 1.5, color: '#002e5b' }} />
                  )
                }}
                sx={textFieldStyle}
              />
            </Box>
          </Grid>

          {/* COMPANY — 🔥 NOW FULL WIDTH */}
          <Grid item xs={12}>
            <Box sx={{ mb: 2.5 }}>
              <TextField
                fullWidth
                name="company"
                label="Company Name"
                value={demoForm.company}
                onChange={handleDemoFormChange}
                InputProps={{
                  startAdornment: (
                    <Business sx={{ mr: 1.5, color: '#002e5b' }} />
                  )
                }}
                sx={textFieldStyle}
              />
            </Box>
          </Grid>

          {/* REQUIREMENTS — 🔥 NOW TRUE FULL WIDTH */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="requirements"
              label="Specific Requirements / Questions"
              value={demoForm.requirements}
              onChange={handleDemoFormChange}
              InputProps={{
                  startAdornment: (
                    <Description sx={{ mr: 1.5, color: '#002e5b' }} />
                  )
                }}
              placeholder="Tell us about your property portfolio, specific challenges, or any features you're particularly interested in..."
              sx={{
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: '#f8fafc',
                  alignItems: 'flex-start'
                },
                '& textarea': {
                  width: '100%'          // 🔥 REAL FIX
                }
              }}
            />
          </Grid>


        </Box>

      </DialogContent>

      <DialogActions sx={{ 
        p: { xs: 2, sm: 3 }, 
        pt: { xs: 1, sm: 2 },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 2 }
      }}>
        <Button
          onClick={handleCloseDemoDialog}
          sx={{
            color: '#002e5b',
            fontWeight: 'bold',
            border: '1px solid #002e5b',
            width: { xs: '100%', sm: 'auto' },
            py: { xs: 0.75, sm: 0.875 },
            px: { xs: 3, sm: 4 },
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: 'rgba(0, 46, 91, 0.05)'
            }
          }}
          size={isSmallScreen ? "medium" : "medium"}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#002e5b',
            color: 'white',
            fontWeight: 'bold',
            width: { xs: '100%', sm: 'auto' },
            py: { xs: 0.75, sm: 0.875 },
            px: { xs: 3, sm: 4 },
            borderRadius: '6px',
            '&:hover': {
              backgroundColor: '#00498a',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
            }
          }}
          size={isSmallScreen ? "medium" : "medium"}
        >
          Submit Request
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);

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
                backgroundColor: leftSlide?.background || 'white',
                display: 'flex',
                alignItems: 'center',
                color: '#002e5b'
              }}
            >
              <Grid container sx={{ height: '100%', alignItems: 'center', width: '100%' }}>
                {/* Left Side - First Item */}
                {leftSlide && (
                  <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                    <Box sx={{ 
                      padding: { xs: 4, md: 8 },
                      textAlign: { xs: 'center', md: 'left' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3 
                      }}>
                        <Typography 
                          variant="h5" 
                          component="h2" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#002e5b',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                            flex: 1
                          }}
                        >
                          {leftSlide.title}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(leftSlide);
                          }}
                          sx={{
                            ml: 2,
                            backgroundColor: '#002e5b',
                            color: 'white',
                            padding: '6px 20px',
                            fontSize: '0.875rem',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            minWidth: '120px',
                            border: '2px solid #002e5b',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'white',
                              color: '#002e5b',
                              borderColor: '#002e5b',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                      
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
                      </Box>
                    </Box>
                  </Grid>
                )}
                
                {/* Right Side - Second Item */}
                {rightSlide && (
                  <Grid item xs={12} md={6} sx={{ width: '50%', height: '100%' }}>
                    <Box sx={{ 
                      padding: { xs: 4, md: 8 },
                      textAlign: { xs: 'center', md: 'left' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        mb: 3 
                      }}>
                        <Typography 
                          variant="h5" 
                          component="h2" 
                          sx={{ 
                            fontWeight: 'bold', 
                            color: '#002e5b',
                            fontSize: { xs: '1.3rem', md: '1.6rem' },
                            flex: 1
                          }}
                        >
                          {rightSlide.title}
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(rightSlide);
                          }}
                          sx={{
                            ml: 2,
                            backgroundColor: '#002e5b',
                            color: 'white',
                            padding: '6px 20px',
                            fontSize: '0.875rem',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            minWidth: '120px',
                            border: '2px solid #002e5b',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              backgroundColor: 'white',
                              color: '#002e5b',
                              borderColor: '#002e5b',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(0, 46, 91, 0.3)'
                            }
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                      
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
                      </Box>
                    </Box>
                  </Grid>
                )}
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
          },
          zIndex: 20
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
          },
          zIndex: 20
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
          },
          zIndex: 20
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
        gap: 1,
        zIndex: 20
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

      {/* Project Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            maxWidth: '1200px',
            borderRadius: '12px',
            overflow: 'hidden'
          }
        }}
      >
        {renderDialogContent()}
        
        {/* Action buttons for Property Management System only */}
        {selectedProject && selectedProject.id === 1 && (
          <DialogActions sx={{ p: 3, pt: 2 }}>
            <Button
              variant="contained"
              onClick={handleOpenDemoDialog}
              sx={{
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold',
                px: 4,
                py: 1,
                '&:hover': {
                  backgroundColor: '#00498a'
                }
              }}
            >
              Request a Demo
            </Button>
            <Button
              variant="outlined"
              onClick={handleOpenDetailsPage}
              sx={{
                borderColor: '#002e5b',
                color: '#002e5b',
                fontWeight: 'bold',
                px: 4,
                py: 1,
                '&:hover': {
                  backgroundColor: '#002e5b',
                  color: 'white'
                }
              }}
            >
              Details
            </Button>
          </DialogActions>
        )}
      </Dialog>

      {/* Demo Request Dialog */}
      {renderDemoDialog()}
    </Box>
  );
};

export default SliderBar;