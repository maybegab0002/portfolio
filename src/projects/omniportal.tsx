
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import omniportalMockup from '../assets/omniportallogin.webp';

const Omniportal = () => {
  const navigate = useNavigate();

  const projectDetails = {
    title: "Omniportal",
    tagline: "Comprehensive Real Estate Management Portal",
    duration: "February 2025 - May 2025",
    role: "Full Stack Developer",
    year: "2025",
    technologies: [
      "React", "Vite", "TypeScript", "Tailwind CSS",
      "Git", "Vercel", "Supabase"
    ],
    overview: "Omniportal is a comprehensive real estate management platform designed to streamline operations across multiple user roles. The system provides dedicated interfaces for administrators, clients, and real estate agents, each with tailored features to manage properties, track sales, process payments, and monitor performance.",
    
    challenges: [
      {
        title: "Multi-Role Architecture",
        description: "Designed and implemented a complex role-based system with three distinct user interfaces (Admin, Client, Agent) while maintaining code reusability and a consistent user experience across all portals."
      },
      {
        title: "Real-time Data Synchronization",
        description: "Leveraged Supabase real-time capabilities to ensure instant updates across all user dashboards when sales, payments, or inventory changes occur, preventing data inconsistencies."
      },
      {
        title: "Complex Commission Calculations",
        description: "Built a sophisticated commission tracking system that automatically calculates agent earnings based on sales data, deductions, and allowances while maintaining accuracy and transparency."
      }
    ],

    process: [
      {
        phase: "Planning & Architecture",
        duration: "Week 1-2",
        activities: [
          "Gathered requirements from real estate stakeholders",
          "Defined three distinct user roles and their access levels",
          "Created database schema for properties, sales, payments, and commissions",
          "Designed system architecture with Supabase backend",
          "Established Git workflow and deployment pipeline"
        ]
      },
      {
        phase: "UI/UX Design & Setup",
        duration: "Week 2-3",
        activities: [
          "Set up React + Vite + TypeScript development environment",
          "Configured Tailwind CSS with custom design system",
          "Designed responsive layouts for all three portals",
          "Created reusable component library",
          "Built authentication flow with Supabase Auth"
        ]
      },
      {
        phase: "Admin Dashboard Development",
        duration: "Week 3-6",
        activities: [
          "Built comprehensive dashboard with analytics and KPIs",
          "Implemented inventory management system",
          "Developed payment processing and tracking module",
          "Created ticketing system for client support",
          "Built reporting module with data export capabilities",
          "Integrated real estate agent sales recording system"
        ]
      },
      {
        phase: "Client Portal Development",
        duration: "Week 6-8",
        activities: [
          "Developed secure payment gateway integration",
          "Built balance statement viewing functionality",
          "Created Statement of Account (SOA) generation",
          "Implemented ticket submission system",
          "Added document upload and management features"
        ]
      },
      {
        phase: "Agent Portal Development",
        duration: "Week 8-10",
        activities: [
          "Built commission tracking dashboard",
          "Implemented sales upload functionality",
          "Developed allowance tracking system",
          "Created interactive leaderboard with rankings",
          "Added performance analytics and insights"
        ]
      },
      {
        phase: "Testing & Deployment",
        duration: "Week 10-12",
        activities: [
          "Conducted comprehensive testing across all portals",
          "Performed security audits and penetration testing",
          "Optimized performance and load times",
          "Set up CI/CD pipeline with Vercel",
          "Deployed to production and monitored stability",
          "Created user documentation and training materials"
        ]
      }
    ],

    features: [
      "Admin Dashboard with real-time analytics and KPIs",
      "Comprehensive inventory management system",
      "Automated payment processing and balance tracking",
      "Integrated ticketing system for client support",
      "Advanced reporting with customizable filters",
      "Real estate agent sales recording and approval",
      "Client payment portal with multiple payment methods",
      "Balance statements and SOA generation",
      "Client ticket submission and tracking",
      "Agent commission tracking and calculations",
      "Sales upload system with validation",
      "Allowance tracking and history",
      "Interactive leaderboard with real-time rankings",
      "Role-based access control (RBAC)",
      "Mobile-responsive design across all portals",
      "Real-time notifications and updates"
    ],

    results: [
      "Successfully launched serving 50+ real estate agents",
      "Processing 200+ property transactions monthly",
      "Reduced administrative overhead by 60%",
      "Improved commission calculation accuracy to 99.9%",
      "Decreased payment processing time by 75%",
      "Achieved 95% user satisfaction score",
      "Zero security incidents since launch"
    ]
  };

  return (
    <div style={{
      fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: 'none',
            color: '#888888',
            fontSize: '0.9rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s ease',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
        >
          <span>←</span> Back to Portfolio
        </button>

        <div style={{
          fontSize: '0.9rem',
          color: '#888888'
        }}>
          Case Study
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '1rem',
            fontWeight: 500
          }}>
            {projectDetails.year} · {projectDetails.role}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {projectDetails.title}
          </h1>

          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#aaaaaa',
            marginBottom: '2rem'
          }}>
            {projectDetails.tagline}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: '#888888',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Duration
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600
              }}>
                {projectDetails.duration}
              </div>
            </div>

            <div>
              <div style={{
                fontSize: '0.75rem',
                color: '#888888',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Role
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600
              }}>
                {projectDetails.role}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mockup Image Section */}
      <section style={{
        padding: '0',
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 1.5rem 4rem 1.5rem'
          }}
        >
          <div style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}>
            <img 
              src={omniportalMockup} 
              alt="Omniportal Login Interface"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Project Overview
          </h2>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#cccccc',
            marginBottom: '2rem'
          }}>
            {projectDetails.overview}
          </p>

          <div style={{
            marginTop: '3rem'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#888888',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              Technologies Used
            </h3>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              {projectDetails.technologies.map((tech, index) => (
                <span key={index} style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  color: '#ffffff'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Scope Section */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Project Scope
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Admin Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Admin Dashboard
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Inventories Management',
                  'Balance Tracking',
                  'Payment Processing',
                  'Ticketing System',
                  'Dashboard Analytics',
                  'Comprehensive Reports',
                  'Real Estate Agent Sales Recording'
                ].map((item, index) => (
                  <li key={index} style={{
                    fontSize: '0.9rem',
                    color: '#aaaaaa',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#22c55e'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Client Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Client Portal
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Secure Payment Gateway',
                  'Balance Statement Viewing',
                  'Statement of Account (SOA)',
                  'Ticket Submission',
                  'Document Management'
                ].map((item, index) => (
                  <li key={index} style={{
                    fontSize: '0.9rem',
                    color: '#aaaaaa',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#22c55e'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Real Estate Agent Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px'
              }}
            >
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Real Estate Agent Portal
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Commission Tracking',
                  'Sales Upload System',
                  'Allowance Tracking',
                  'Performance Leaderboard',
                  'Analytics & Insights'
                ].map((item, index) => (
                  <li key={index} style={{
                    fontSize: '0.9rem',
                    color: '#aaaaaa',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#22c55e'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section style={{
        padding: '4rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            Key Challenges & Solutions
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {projectDetails.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}
              >
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>
                  {challenge.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#aaaaaa'
                }}>
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            Development Process
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {projectDetails.process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  height: '100%'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    minWidth: '45px'
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem',
                      lineHeight: 1.2
                    }}>
                      {phase.phase}
                    </h3>
                    <div style={{
                      fontSize: '0.8rem',
                      color: '#888888'
                    }}>
                      {phase.duration}
                    </div>
                  </div>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}>
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      color: '#aaaaaa',
                      position: 'relative',
                      paddingLeft: '1.25rem'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#888888',
                        fontSize: '0.7rem'
                      }}>•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 1.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            Key Features
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {projectDetails.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  color: '#cccccc'
                }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            letterSpacing: '-0.02em'
          }}>
            Results & Impact
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {projectDetails.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <span style={{
                  fontSize: '1.5rem'
                }}>✓</span>
                {result}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{
        padding: '4rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em'
          }}>
            Interested in Working Together?
          </h2>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#aaaaaa',
            marginBottom: '2rem'
          }}>
            Let's discuss how I can help bring your project to life with clean code and exceptional user experiences.
          </p>

          <button
            onClick={() => navigate('/#contact')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#ffffff',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          fontSize: '0.85rem',
          color: '#888888'
        }}>
          © {new Date().getFullYear()} Gab Enciso. All rights reserved.
        </p>
      </footer>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Omniportal;