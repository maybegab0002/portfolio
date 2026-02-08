
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import kadizMockup from '../assets/kadizmockup.webp';

const Kadiz = () => {
  const navigate = useNavigate();

  const projectDetails = {
    title: "Kadiz POS",
    tagline: "Modern Point of Sale System for Retail Excellence",
    duration: "4 months",
    role: "Full Stack Developer",
    year: "2025",
    technologies: [
      "React", "TypeScript", "Vite", "Tailwind CSS",
      "Node.js", "Express.js", "Supabase", "Stripe"
    ],
    overview: "Kadiz POS is a modern, cloud-based point of sale system designed for retail businesses. It offers seamless transaction processing, inventory management, and real-time sales analytics, all wrapped in an intuitive interface that works across devices.",
    
    challenges: [
      {
        title: "Offline Functionality",
        description: "Implemented Progressive Web App (PWA) features with IndexedDB to ensure the system works seamlessly even without internet connection, syncing data when connection is restored."
      },
      {
        title: "Payment Integration",
        description: "Integrated multiple payment gateways (Stripe, PayPal) with robust error handling and transaction reconciliation to ensure secure and reliable payment processing."
      },
      {
        title: "Real-time Inventory Sync",
        description: "Developed real-time inventory synchronization across multiple store locations using Supabase real-time subscriptions, preventing overselling and stock discrepancies."
      }
    ],

    process: [
      {
        phase: "Research & Analysis",
        duration: "1 week",
        activities: [
          "Interviewed retail store owners to understand pain points",
          "Analyzed competitor POS systems and market gaps",
          "Created user stories and feature prioritization matrix",
          "Defined success metrics and KPIs"
        ]
      },
      {
        phase: "UI/UX Design",
        duration: "2 weeks",
        activities: [
          "Designed low-fidelity wireframes for key workflows",
          "Created high-fidelity designs with Figma",
          "Built interactive prototype for cashier flow",
          "Conducted usability testing with retail staff",
          "Iterated based on feedback"
        ]
      },
      {
        phase: "Backend Development",
        duration: "4 weeks",
        activities: [
          "Set up Supabase database with proper indexing",
          "Implemented RESTful API with Express.js",
          "Built authentication and authorization system",
          "Integrated Stripe payment processing",
          "Developed inventory management logic",
          "Created automated backup system"
        ]
      },
      {
        phase: "Frontend Development",
        duration: "6 weeks",
        activities: [
          "Built responsive UI with React and Tailwind CSS",
          "Implemented state management with Zustand",
          "Created reusable component library",
          "Developed offline-first capabilities with Service Workers",
          "Built receipt printing functionality",
          "Implemented barcode scanning support"
        ]
      },
      {
        phase: "Testing & Launch",
        duration: "3 weeks",
        activities: [
          "Performed end-to-end testing of all workflows",
          "Conducted load testing with simulated high traffic",
          "Beta testing with 5 pilot stores",
          "Fixed bugs and optimized performance",
          "Deployed to production",
          "Created training videos and documentation"
        ]
      }
    ],

    features: [
      "Lightning-fast checkout process with barcode scanning",
      "Offline mode with automatic cloud sync",
      "Multi-store inventory management",
      "Customer loyalty program integration",
      "Detailed sales reports and analytics dashboard",
      "Receipt printing and email receipts",
      "Employee management and shift tracking",
      "Multiple payment methods (cash, card, digital wallets)",
      "Return and refund processing",
      "Product catalog with categories and variants",
      "Low stock alerts and reorder notifications",
      "Touch-optimized interface for tablets"
    ],

    results: [
      "Reduced average checkout time by 50%",
      "99.9% uptime with offline functionality",
      "Processing 5,000+ transactions daily across 10 stores",
      "Improved inventory accuracy to 98%",
      "Increased customer satisfaction scores by 35%",
      "Reduced training time for new staff by 60%"
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
              src={kadizMockup} 
              alt="Kadiz POS Interface"
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
            {/* POS Features */}
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
                Core POS Features
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Fast checkout with barcode scanning',
                  'Multiple payment methods',
                  'Receipt printing & email',
                  'Return & refund processing',
                  'Offline mode with sync',
                  'Touch-optimized interface'
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

            {/* Inventory Management */}
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
                Inventory & Products
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Multi-store inventory sync',
                  'Product catalog management',
                  'Categories & variants',
                  'Low stock alerts',
                  'Automatic reorder notifications',
                  'Real-time stock updates'
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

            {/* Analytics & Management */}
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
                Analytics & Management
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Sales reports & analytics',
                  'Employee management',
                  'Shift tracking',
                  'Customer loyalty program',
                  'Performance metrics',
                  'Data export capabilities'
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

export default Kadiz;