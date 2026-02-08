
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import spendzySIgnup from '../assets/spendzysignup.png';
import spendzyMain from '../assets/spendzy.png';

const Spendzy = () => {
  const navigate = useNavigate();

  const projectDetails = {
    title: "Spendzy",
    tagline: "Smart Financial Tracking Made Simple",
    duration: "Discontinued",
    role: "Full Stack Developer",
    year: "2024-2025",
    status: "Personal Project",
    technologies: [
      "Flutter", "Dart", "Supabase"
    ],
    overview: "Spendzy was a mobile-first financial tracking application designed to help users manage their expenses, track spending patterns, and achieve their financial goals. Built with Flutter for cross-platform compatibility, the app aimed to provide an intuitive interface for daily financial management. Development was discontinued after completing the core authentication and UI foundation.",
    
    challenges: [
      {
        title: "Flutter Widget Architecture",
        description: "Learning Flutter's declarative UI framework and understanding how to properly structure widgets for reusability and maintainability across the application."
      },
      {
        title: "State Management in Flutter",
        description: "Implementing an effective state management solution to handle user authentication, expense data, and UI updates across different screens."
      },
      {
        title: "Supabase Integration",
        description: "Setting up Supabase backend for authentication and real-time database functionality, managing secure connections and data synchronization."
      }
    ],

    process: [
      {
        phase: "Concept & Planning",
        duration: "Week 1",
        activities: [
          "Researched existing finance tracking apps",
          "Identified key features and user pain points",
          "Created user personas and user flows",
          "Designed app architecture and data models",
          "Set up development environment with Flutter"
        ]
      },
      {
        phase: "UI/UX Design",
        duration: "Week 2",
        activities: [
          "Designed app wireframes and mockups",
          "Created design system with color palette",
          "Built screen layouts in Figma",
          "Established component hierarchy",
          "Optimized for mobile interactions"
        ]
      },
      {
        phase: "Authentication Setup",
        duration: "Week 3",
        activities: [
          "Set up Supabase project and configuration",
          "Implemented Supabase authentication",
          "Built signup and login screens",
          "Created basic navigation structure",
          "Tested authentication flow"
        ]
      },
      {
        phase: "Core UI Development",
        duration: "Week 4",
        activities: [
          "Built main app screens with Flutter widgets",
          "Implemented responsive layouts",
          "Created reusable UI components",
          "Added basic navigation between screens",
          "Integrated app theming and styling"
        ]
      }
    ],

    features: [
      "User authentication and signup",
      "Quick expense entry interface",
      "Category-based organization",
      "Transaction history view",
      "Basic dashboard layout",
      "Spending analytics charts (planned)",
      "Budget tracking (planned)",
      "Visual graphs and reports (planned)",
      "Recurring expense management (planned)",
      "Multi-currency support (planned)",
      "Dark mode support (planned)",
      "Data export functionality (planned)"
    ],

    currentStatus: [
      "Authentication system implemented",
      "Basic UI screens designed and built",
      "Navigation structure completed",
      "Design system established",
      "Project discontinued after phase 4"
    ],

    discontinuedReasons: [
      "Shifted focus to other priority projects",
      "Reassessed project viability and market fit",
      "Valuable learning experience with Flutter and Supabase",
      "Core concepts and designs can be reused in future projects"
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
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            fontSize: '0.75rem',
            color: '#888888',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            {projectDetails.status}
          </div>
          <div style={{
            padding: '0.35rem 0.75rem',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#ef4444'
          }}>
            Discontinued
          </div>
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
                Timeline
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
                Platform
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600
              }}>
                iOS & Android
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mockup Images Section */}
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)'
            }}>
              <img 
                src={spendzySIgnup} 
                alt="Spendzy Signup Screen"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
            
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              backgroundColor: 'rgba(255, 255, 255, 0.02)'
            }}>
              <img 
                src={spendzyMain} 
                alt="Spendzy Main Interface"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
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
            App Features
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Expense Tracking */}
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
                Expense Tracking
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Quick expense entry',
                  'Category-based organization',
                  'Transaction history',
                  'Search and filters',
                  'Recurring expenses',
                  'Expense sharing'
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

            {/* Analytics & Insights */}
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
                Analytics & Insights
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Visual charts and graphs',
                  'Spending patterns',
                  'Budget tracking',
                  'Monthly/weekly reports',
                  'Goal progress',
                  'Category breakdown'
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

            {/* User Experience */}
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
                User Experience
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Dark mode support',
                  'Biometric authentication',
                  'Offline mode',
                  'Multi-currency support',
                  'Data export (CSV/PDF)',
                  'Custom categories & tags'
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

      {/* Current Status */}
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
            Current Status
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {projectDetails.currentStatus.map((status, index) => (
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
                {status}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Discontinued */}
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
            Why Discontinued
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {projectDetails.discontinuedReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  color: '#cccccc'
                }}
              >
                {reason}
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
            Lessons Learned
          </h2>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#aaaaaa',
            marginBottom: '2rem'
          }}>
            While this project was discontinued, it provided valuable experience with Flutter and Supabase. Check out my completed projects to see how these learnings were applied.
          </p>

          <button
            onClick={() => navigate('/#projects')}
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
            View Other Projects
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

export default Spendzy;