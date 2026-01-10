import React from 'react';
import { Container, Typography, Box, Paper, Button, Grid } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SliderBar from '../SliderBar';

const HomePage = () => {
  const navigate = useNavigate();

  // Auto-assign images based on service ID
  const getServiceImage = (serviceId) => {
    if (serviceId <= 6) {
      return `/services/card0${serviceId}.png`;
    } else if (serviceId === 7) {
      return `/services/thumbnail.jpg`;
    } else {
      return `/services/thumbnail1.png`;
    }
  };

  const services = [
    {
      id: 1,
      title: "Voice Assistant Development",
      description: "Custom AI voice assistants with Speech-to-Text & Text-to-Speech capabilities. We provide call center & IVR automation solutions with multilingual support for global businesses.",
      buttonText: "Explore Voice Solutions"
    },
    {
      id: 2,
      title: "Data Scraping & Web Automation",
      description: "Professional web data extraction services with real-time & scheduled scraping capabilities. We handle data cleaning, storage, and anti-bot & CAPTCHA challenges efficiently.",
      buttonText: "Learn More"
    },
    {
      id: 3,
      title: "AI Chatbot Development",
      description: "Intelligent website & WhatsApp chatbots powered by GPT technology. We create customer support automation systems and knowledge base bots for enhanced user engagement.",
      buttonText: "Discover Chatbots"
    },
    {
      id: 4,
      title: "Custom Web Application Development",
      description: "Enterprise & SaaS solutions including CRM, ERP, HRM, and Payroll systems. We build POS & Management systems with secure & scalable architecture for your business needs.",
      buttonText: "View Solutions"
    },
    {
      id: 5,
      title: "API & Backend Development",
      description: "Robust REST & GraphQL APIs with comprehensive authentication & authorization. We provide third-party API integration and payment gateway integration services.",
      buttonText: "Explore APIs"
    },
    {
      id: 6,
      title: "Data Analytics & Dashboards",
      description: "Business intelligence dashboards with KPI & reporting systems. We create real-time charts & analytics and custom admin panels for data-driven decision making.",
      buttonText: "See Dashboards"
    },
    {
      id: 7,
      title: "Process Automation",
      description: "Workflow automation solutions with background jobs & schedulers. We provide Excel / CSV automation and email & SMS automation to streamline your operations.",
      buttonText: "Automate Now"
    },
    {
      id: 8,
      title: "Cloud & DevOps",
      description: "Docker containerization and cloud deployment on AWS / Azure. We set up CI/CD pipelines and provide performance optimization services for scalable infrastructure.",
      buttonText: "Deploy Solutions"
    }
  ].map(service => ({
    ...service,
    image: getServiceImage(service.id)
  }));

  // AI Offerings from About page
  const aiOfferings = [
    {
      title: "AI Assistant",
      description: "Task automation and intelligent decision support to streamline business operations and enhance productivity.",
      image: "/AI/card01.png"
    },
    {
      title: "Chatbot Development",
      description: "Custom AI chatbots for customer engagement, instant support, and automated user interactions across platforms.",
      image: "/AI/card02.png"
    },
    {
      title: "Voice Chatbot",
      description: "Voice-enabled AI assistants with speech recognition and synthesis for natural, hands-free interactions.",
      image: "/AI/card03.png"
    },
    {
      title: "AI Automation",
      description: "Intelligent workflow automation solutions that optimize processes and reduce manual effort for enterprise efficiency.",
      image: "/AI/card04.png"
    },
    {
      title: "DocuSource",
      description: "AI-powered content generation and writing assistance tools designed for authors and content creators. Intelligent document processing, summarization, and research assistance for professionals and researchers.",
      image: "/AI/card05.png"
    }
  ];

  return (
    <>
      <SliderBar />
      
      {/* AI Section */}
      <Box sx={{ py: 8, backgroundColor: '#f0f7ff' }}>
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#002e5b',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              AI Solutions
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Harnessing the power of artificial intelligence to deliver innovative, enterprise-ready solutions that transform how businesses operate and interact with their customers.
            </Typography>
          </Box>

          {/* AI Offerings Grid */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: 4,
              width: '100%'
            }}
          >
            {aiOfferings.map((item, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: { xs: 'auto', sm: '450px', md: '450px' },
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e0e0e0',
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 16px)', 
                    md: 'calc(33.333% - 22px)' 
                  },
                  minWidth: { xs: '100%', sm: '280px', md: '300px' },
                  maxWidth: { xs: '100%', sm: '400px', md: '400px' },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                    borderColor: '#002e5b'
                  }
                }}
              >
                {/* AI Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: 150,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 3
                  }}
                  onError={(e) => {
                    e.target.src = '/AI/ai.png';
                  }}
                />
                
                {/* AI Title */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2, 
                    color: '#002e5b',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  {item.title}
                </Typography>
                
                {/* AI Description */}
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6, 
                    flexGrow: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* View All AI Button */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#00498a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 46, 91, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View All AI Solutions
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Services Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                color: '#002e5b',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Our Services
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto', 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Comprehensive technology solutions tailored to your business needs. 
              From AI-powered applications to custom web development, we deliver excellence.
            </Typography>
          </Box>

          {/* Services Grid - Show only first 3 services */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                md: 'repeat(3, 1fr)' 
              },
              gap: 4,
              width: '100%'
            }}
          >
            {services.slice(0, 3).map((service) => (
              <Paper
                key={service.id}
                elevation={3}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                {/* Service Image */}
                <Box
                  component="img"
                  src={service.image}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 150,
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 3
                  }}
                  onError={(e) => {
                    e.target.src = '/services/thumbnail.jpg';
                  }}
                />
                
                {/* Service Title */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 2, 
                    color: '#002e5b',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                  {service.title}
                </Typography>
                
                {/* Service Description */}
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    lineHeight: 1.6, 
                    mb: 3, 
                    flexGrow: 1,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  {service.description}
                </Typography>
                
                {/* Call to Action Button */}
                <Button
                  variant="outlined"
                  endIcon={<ArrowForward />}
                  fullWidth
                  onClick={() => {
                    navigate('/coditium-services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  sx={{
                    borderColor: '#002e5b',
                    color: '#002e5b',
                    '&:hover': {
                      backgroundColor: '#002e5b',
                      color: 'white'
                    }
                  }}
                >
                  {service.buttonText}
                </Button>
              </Paper>
            ))}
          </Box>

          {/* View All Services Button */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                navigate('/coditium-services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: '#002e5b',
                color: 'white',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#00498a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(0, 46, 91, 0.3)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;