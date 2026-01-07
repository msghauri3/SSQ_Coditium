import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Stack,
  Container,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Cloud,
  Security,
  TrendingUp,
  Groups,
  Receipt,
  Build,
  Dashboard,
  Storage,
  Verified,
  Email,
  Phone,
  LocationOn,
  ArrowForward,
  ArrowBack 
} from '@mui/icons-material';

const PropertyManagementDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      bgcolor: 'background.default',
      minHeight: '100vh',
      pt: { xs: 4, md: 8 },
      pb: 8 
    }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => window.close()}
          sx={{
            mb: 4,
            color: '#002e5b',
            '&:hover': {
              backgroundColor: 'rgba(0, 46, 91, 0.04)'
            }
          }}
        >
          Back to Previous Page
        </Button>
        {/* Hero Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 8 },
          px: { xs: 2, md: 0 }
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #002e5b 0%, #0066cc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              lineHeight: 1.2
            }}
          >
            Property Management Software<br/>for Modern Property Owners
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 3,
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            A secure, cloud-based solution designed to help landlords and property managers efficiently manage rental properties, tenants, payments, and maintenance from one centralized platform.
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}
          >
            Whether you manage residential, commercial, or student housing, our property management software simplifies daily operations and improves financial visibility.
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            
          </Stack>
        </Box>

        {/* Mission & Value Proposition */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                height: '100%',
                bgcolor: '#f8fafc',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: '#002e5b',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Verified sx={{ color: '#10b981' }} />
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    To make property management simple, transparent, and stress-free using smart digital solutions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ 
                height: '100%',
                bgcolor: '#002e5b',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <TrendingUp />
                    Value Proposition
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                    Designed for Modern Property Management. Our system brings together property data, tenants, payments, and maintenance into one streamlined platform, helping you save time, minimize errors, and make informed decisions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Key Benefits */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              color: '#002e5b',
              mb: 2,
              textAlign: 'center'
            }}
          >
            Key Benefits
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Our online property management system is built to reduce manual work, improve organization, and support business growth.
          </Typography>
          
          <Grid container spacing={3}>
            {[
              { 
                icon: <Cloud fontSize="large" />, 
                title: "Centralized Management",
                desc: "Manage all rental properties from one platform"
              },
              { 
                icon: <Groups fontSize="large" />, 
                title: "Real-time Tracking",
                desc: "Track tenants and leases in real-time"
              },
              { 
                icon: <Receipt fontSize="large" />, 
                title: "Accurate Monitoring",
                desc: "Monitor rent and payments with precision"
              },
              { 
                icon: <Build fontSize="large" />, 
                title: "Streamlined Maintenance",
                desc: "Efficient maintenance request management"
              },
              { 
                icon: <TrendingUp fontSize="large" />, 
                title: "Scalable Solution",
                desc: "Grows with your property portfolio"
              },
              { 
                icon: <Security fontSize="large" />, 
                title: "Secure & Compliant",
                desc: "Enterprise-grade security and compliance"
              }
            ].map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  height: '100%',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'none',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': { 
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 46, 91, 0.1)'
                  }
                }}>
                  <CardContent sx={{ 
                    p: 4,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <Box sx={{ 
                      color: '#002e5b',
                      mb: 2
                    }}>
                      {benefit.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#002e5b',
                        mb: 1
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {benefit.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              color: '#002e5b',
              mb: 6,
              textAlign: 'center'
            }}
          >
            All-in-One Property Management Solution
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            This property management software replaces spreadsheets and manual processes with a reliable digital platform that keeps your data organized, secure, and accessible at all times.
          </Typography>

          <Box sx={{ 
            bgcolor: '#f8fafc',
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            mb: 6
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 600, 
                color: '#002e5b',
                mb: 4,
                textAlign: 'center'
              }}
            >
              Features of Our Property Management Software
            </Typography>
            
            <Grid container spacing={4}>
              {[
                {
                  icon: '🏠',
                  title: 'Property Management',
                  features: ['Multiple properties & units', 'Availability tracking', 'Easy property updates']
                },
                {
                  icon: '👤',
                  title: 'Tenant Management',
                  features: ['Secure tenant storage', 'Unit assignments', 'Lease tracking']
                },
                {
                  icon: '🛠️',
                  title: 'Maintenance',
                  features: ['Issue submission', 'Status tracking', 'Task assignment']
                },
                {
                  icon: '💳',
                  title: 'Rent & Payments',
                  features: ['Payment monitoring', 'Balance views', 'Report generation']
                },
                {
                  icon: '📊',
                  title: 'Reports & Analytics',
                  features: ['Occupancy reports', 'Payment summaries', 'Maintenance history']
                },
                {
                  icon: '⚡',
                  title: 'Automation',
                  features: ['Auto reminders', 'Scheduled reports', 'Payment automation']
                }
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box sx={{ 
                    p: 3,
                    height: '100%',
                    bgcolor: 'white',
                    borderRadius: 2,
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: '#002e5b',
                      boxShadow: '0 8px 16px rgba(0, 46, 91, 0.1)'
                    }
                  }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#002e5b',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        fontSize: '1.5rem'
                      }}
                    >
                      <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                      {feature.title}
                    </Typography>
                    <Box sx={{ pl: 1 }}>
                      {feature.features.map((item, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                          <Box sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: '#002e5b', 
                            borderRadius: '50%',
                            mr: 2 
                          }} />
                          <Typography variant="body1" sx={{ color: '#555' }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Why Choose Us & Target Audience */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: 'white',
              borderRadius: 3,
              border: '1px solid #e2e8f0',
              height: '100%',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#002e5b',
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Verified sx={{ color: '#10b981' }} />
                Why Choose Our System
              </Typography>
              
              <Stack spacing={2}>
                {[
                  "Saves time and reduces manual work",
                  "Improves tenant communication",
                  "Enhances operational transparency",
                  "Scales with your property portfolio",
                  "Keeps all records in one place",
                  "Easy to use for beginners",
                  "Secure data management and compliant data handling"
                ].map((reason, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ 
                      width: 24, 
                      height: 24, 
                      borderRadius: '50%',
                      bgcolor: '#e6f7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Verified sx={{ fontSize: 16, color: '#002e5b' }} />
                    </Box>
                    <Typography variant="body1">{reason}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: { xs: 3, md: 4 },
              bgcolor: '#002e5b',
              color: 'white',
              borderRadius: 3,
              height: '100%',
              boxShadow: '0 8px 32px rgba(0, 46, 91, 0.2)'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 600, 
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Groups />
                Who Can Use This System?
              </Typography>
              
              <Grid container spacing={2}>
                {[
                  "Landlords",
                  "Property Managers",
                  "Real Estate Agencies",
                  "Student Housing",
                  "Commercial Owners",
                  "Small Portfolio Owners",
                  "Medium Portfolio Owners",
                  "Property Investors"
                ].map((user, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 1.5,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateX(4px)'
                      }
                    }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        bgcolor: '#4dabf7', 
                        borderRadius: '50%' 
                      }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                        {user}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Final CTA */}
        <Box sx={{ 
          textAlign: 'center', 
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(135deg, #002e5b 0%, #0066cc 100%)',
          color: 'white',
          mb: 8
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            A Smarter Way to Manage Properties
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto',
              fontWeight: 400
            }}
          >
            All-in-one property management software built for efficiency, transparency, and growth. Simplify operations, reduce costs, and gain full visibility across your property portfolio.
          </Typography>
          
          
        </Box>

        {/* Contact Section */}
        <Box sx={{ 
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          border: '1px solid #e2e8f0',
          bgcolor: 'white',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              color: '#002e5b',
              mb: 2,
              textAlign: 'center'
            }}
          >
            Contact Us
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: 'text.secondary',
              textAlign: 'center',
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Speak with our team for inquiries, demonstrations, or partnership opportunities.
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#002e5b',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Email sx={{ color: '#002e5b' }} />
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                  Have questions or want to learn more? We're here to help you transform your property management process.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%',
                    bgcolor: '#e6f7ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Email sx={{ color: '#002e5b' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                      Email
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#002e5b' }}>
                      info@property-system.com
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%',
                    bgcolor: '#e6f7ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone sx={{ color: '#002e5b' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                      Phone
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#002e5b' }}>
                      +123 456 7890
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%',
                    bgcolor: '#e6f7ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <LocationOn sx={{ color: '#002e5b' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                      Address
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#002e5b' }}>
                      Your City, Your Country
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                p: 4,
                bgcolor: '#f8fafc',
                borderRadius: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#002e5b',
                    mb: 3
                  }}
                >
                  Ready to Transform Your Property Management?
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.8 }}>
                  Join thousands of property professionals who trust our platform to streamline their operations and grow their business.
                </Typography>
                
                
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PropertyManagementDetails;