import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from './assets/profile.webp';
import profileColoredImage from './assets/profilecolored.webp';
import Beams from './component/Beams';
import omniportalImage from './assets/omniportallogin.webp';
import kadizImage from './assets/kadizmockup.webp';
import spendzyImage from './assets/spendzy.webp';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'rate_limited'>('idle');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting: 1 email per minute
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime;
    const oneMinute = 60 * 1000; // 60 seconds in milliseconds
    
    if (timeSinceLastSubmit < oneMinute) {
      const remainingTime = Math.ceil((oneMinute - timeSinceLastSubmit) / 1000);
      setSubmitStatus('rate_limited');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      console.log(`Please wait ${remainingTime} seconds before sending another message`);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using Web3Forms - Free email service, no backend needed
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd6e60692-5318-4b4d-b5ee-7e9e05fa37d8', // Get free key from web3forms.com
          name: emailForm.name,
          email: emailForm.email,
          message: emailForm.message,
          subject: 'New Client Form Submission from Portfolio'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setEmailForm({ name: '', email: '', message: '' });
        setLastSubmitTime(now);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const projects = [
    {
      title: 'Omniportal',
      description: 'Client onboarding and secure portal for teams and partners.',
      tags: ['Portal', 'Auth', 'B2B'],
      image: omniportalImage,
      link: '/projects/omniportal'
    },
    {
      title: 'Kadiz POS',
      description: 'Point-of-sale system with real-time inventory and analytics.',
      tags: ['POS', 'Inventory', 'Retail'],
      image: kadizImage,
      link: '/projects/kadiz'
    },
    {
      title: 'Spendzy',
      description: 'Personal finance tracking app with budget insights and goals.',
      tags: ['FinTech', 'Insights', 'Mobile-first'],
      image: spendzyImage,
      link: '/projects/spendzy'
    }
  ];

  const experiences = [
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Building modern web applications for clients worldwide, specializing in React, Next.js, Node.js, and cloud technologies"
    }
  ];

  const skills = {
    "Frontend": ["React", "Vite", "Next.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js"],
    "Database": ["Supabase", "Firebase", "MongoDB"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes", "Git"]
  };

  const techLogos: Record<string, string> = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  };

  return (
    <div style={{
      fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Global Beams Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        opacity: 0.35,
        pointerEvents: 'none',
        zIndex: 0
      }}>
        <Beams
          beamWidth={1.7}
          beamHeight={25}
          beamNumber={20}
          lightColor="#ffffff"
          speed={1.9}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={60}
        />
      </div>

      {/* Vertical border lines on sides */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: 999
      }} />
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        zIndex: 999
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: scrollY > 50 ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        <div 
          onClick={() => scrollToSection('hero')}
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            cursor: 'pointer'
          }}>
          Portfolio
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: '#888888',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                transition: 'color 0.3s ease',
                position: 'relative',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          gap: '3rem',
          alignItems: 'center',
          zIndex: 1,
          position: 'relative'
        }}>
          {/* Profile Image - LEFT SIDE, SMALLER, NO GLOW */}
          <div className="profile-container" style={{
            display: 'flex',
            justifyContent: 'center',
            animation: 'fadeIn 1s ease-out 0.3s backwards'
          }}>
            <div 
              style={{
                position: 'relative',
                width: '250px',
                height: '250px',
                cursor: 'pointer'
              }}
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              {/* Square Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: 'transparent'
              }}>
                {/* Base B&W Image */}
                <img 
                  src={profileImage}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: isProfileHovered ? 0 : 1,
                    transition: 'opacity 0.6s ease-in-out'
                  }}
                />
                {/* Colored Image on top */}
                <img 
                  src={profileColoredImage}
                  alt="Profile Colored"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: isProfileHovered ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="content-container" style={{
            animation: 'fadeInUp 1s ease-out'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#888888',
                fontWeight: 500
              }}>
                Full Stack Developer
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.85rem',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#22c55e'
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  animation: 'pulse 2s ease-in-out infinite'
                }}></span>
                Available for Freelance Work
              </div>
            </div>
            
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Crafting Digital Experiences
            </h1>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#aaaaaa',
              marginBottom: '2rem',
              maxWidth: '500px'
            }}>
              Specializing in building scalable applications with modern technologies. 
              Passionate about clean code and exceptional user experiences.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
              <button onClick={() => scrollToSection('projects')} style={{
                padding: '0.85rem 1.75rem',
                backgroundColor: '#ffffff',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                View Projects
              </button>
              
              <button onClick={() => scrollToSection('contact')} style={{
                padding: '0.85rem 1.75rem',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}>
                Contact Me
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#888888',
              fontSize: '0.85rem',
              marginTop: '0.5rem'
            }}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Antipolo City, Philippines</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '0.75rem',
            fontWeight: 500
          }}>
            About Me
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Building the Future
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>
                My Journey
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: '#aaaaaa'
              }}>
                With over 3 years of experience in web development, I've had the privilege 
                of working on diverse projects ranging from startups to enterprise applications.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>
                What I Do
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: '#aaaaaa'
              }}>
                I develop web applications designed to solve real business problems. Whether it’s streamlining operations, improving customer experience, or automating manual workflows, I build solutions that help businesses run more efficiently and grow faster. Every application is designed to be reliable, scalable, and easy for both teams and customers to use.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>
                My Approach
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: '#aaaaaa'
              }}>
                I prioritize creating solutions that are structured, dependable, and built to last, so your business can operate smoothly without technical limitations slowing you down.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em'
            }}>
              Technical Skills
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              {Object.entries(skills).map(([category, techs]) => (
                <div key={category}>
                  <h4 style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {category}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {techs.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '0.8rem',
                        color: '#aaaaaa',
                        padding: '0.35rem 0.7rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '6px',
                        letterSpacing: '0.02em'
                      }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          {techLogos[tech] && (
                            <img
                              src={techLogos[tech]}
                              alt={`${tech} logo`}
                              style={{
                                width: '16px',
                                height: '16px',
                                objectFit: 'contain',
                                filter: 'grayscale(10%)'
                              }}
                              loading="lazy"
                            />
                          )}
                          <span>{tech}</span>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process Section */}
      <section id="onboarding" style={{
        padding: '4rem 1.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.75rem',
              fontWeight: 500
            }}>
              How We Work
            </div>

            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '2.5rem',
              letterSpacing: '-0.02em'
            }}>
              Onboarding Process
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.5rem'
          }}>
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We start with a conversation to understand your goals, requirements, and vision for the project.'
              },
              {
                step: '02',
                title: 'Planning & Strategy',
                description: 'I create a detailed project plan, timeline, and technical architecture tailored to your needs.'
              },
              {
                step: '03',
                title: 'Design & Development',
                description: 'Bringing your ideas to life with modern technologies, regular updates, and collaborative feedback.'
              },
              {
                step: '04',
                title: 'Testing & Launch',
                description: 'Thorough testing, optimization, and a smooth deployment process to ensure everything works perfectly.'
              },
              {
                step: '05',
                title: 'Support & Maintenance',
                description: 'Ongoing support, updates, and improvements to keep your application running at its best.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '2rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {process.step}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em'
                  }}>
                    {process.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: '#aaaaaa'
                  }}>
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{
        padding: '4rem 1.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '0.75rem',
            fontWeight: 500
          }}>
            Experience
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em'
          }}>
            Professional Journey
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.75rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      marginBottom: '0.25rem',
                      letterSpacing: '-0.01em'
                    }}>
                      {exp.role}
                    </h3>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#888888',
                      letterSpacing: '0.02em'
                    }}>
                      {exp.company}
                    </div>
                  </div>
                  
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#888888',
                    padding: '0.35rem 0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '6px',
                    letterSpacing: '0.02em'
                  }}>
                    {exp.period}
                  </div>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#aaaaaa'
                }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '4rem 1.5rem 0 1.5rem',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '3rem'
        }}>
          <div style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '0.75rem',
            fontWeight: 500
          }}>
            Portfolio
          </div>

          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Recent Works
          </h2>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#aaaaaa',
            maxWidth: '600px'
          }}>
            Explore my latest projects and creative solutions. Click a project to see more details.
          </p>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                className={`project-card ${index === 2 ? 'span-2' : ''} ${project.title === 'Spendzy' ? 'mb-spendzy' : ''}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div
                  className="project-image"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%), url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    color: '#bdbdbd',
                    marginBottom: '1rem'
                  }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1rem'
                  }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '0.7rem',
                        color: '#e5e5e5',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '999px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        letterSpacing: '0.04em'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#ffffff'
                  }}>
                    View Project
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ef4444'
                    }} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        position: 'relative',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#888888',
              marginBottom: '0.75rem',
              fontWeight: 500
            }}>
              Get in Touch
            </div>

            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}>
              Let's Work Together
            </h2>

            <p style={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#aaaaaa',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem'
            }}>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem',
              textAlign: 'left'
            }}
          >
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                color: '#aaaaaa'
              }}>
                Name
              </label>
              <input
                type="text"
                required
                value={emailForm.name}
                onChange={(e) => setEmailForm({...emailForm, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.5)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                color: '#aaaaaa'
              }}>
                Email
              </label>
              <input
                type="email"
                required
                value={emailForm.email}
                onChange={(e) => setEmailForm({...emailForm, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.5)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                marginBottom: '0.5rem',
                color: '#aaaaaa'
              }}>
                Message
              </label>
              <textarea
                required
                value={emailForm.message}
                onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0, 102, 255, 0.5)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: isSubmitting ? '#666666' : '#ffffff',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                color: '#22c55e',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '8px',
                color: '#ef4444',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            {submitStatus === 'rate_limited' && (
              <div style={{
                padding: '1rem',
                backgroundColor: 'rgba(234, 179, 8, 0.1)',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                borderRadius: '8px',
                color: '#eab308',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}>
                Please wait a minute before sending another message.
              </div>
            )}
          </motion.form>
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

      {/* Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%);
          border-radius: 6px;
          border: 2px solid #0a0a0a;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%);
        }

        /* Firefox */
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.6) #0a0a0a;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .project-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: transform 0.25s ease, border-color 0.25s ease;
          overflow: hidden;
        }

        .project-image {
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .project-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(1200px 400px at -10% -20%, rgba(255, 255, 255, 0.06), transparent 60%);
          pointer-events: none;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .project-card:hover .project-image {
          opacity: 1;
        }

        .project-card.span-2 {
          grid-column: span 2;
        }

        .project-card.mb-spendzy {
          margin-bottom: 1.25rem;
        }

        /* Responsive Design - Tablet and Mobile */
        @media (max-width: 768px) {
          /* Navigation */
          nav {
            padding: 0.75rem 1rem !important;
          }

          nav > div:first-child {
            font-size: 1rem !important;
          }

          nav > div:last-child {
            gap: 1rem !important;
          }

          nav button {
            font-size: 0.75rem !important;
          }

          /* Hero Section */
          #hero {
            min-height: auto !important;
            padding: 6rem 1.5rem 4rem 1.5rem !important;
          }

          #hero > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center;
            max-width: 100% !important;
          }

          #hero h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }

          #hero p {
            font-size: 0.95rem !important;
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          #hero .profile-container {
            order: 1;
            margin: 0 auto;
          }

          #hero .content-container {
            order: 2;
          }

          /* Profile Image */
          #hero .profile-container > div {
            width: 200px !important;
            height: 200px !important;
          }

          #hero .profile-container > div > div {
            width: 100% !important;
            height: 100% !important;
          }

          /* Badge Container - Stack vertically on mobile */
          #hero .content-container > div:first-child {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
            justify-content: center !important;
          }

          /* Buttons */
          #hero button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.85rem !important;
          }

          #hero > div > div:last-child > div:nth-child(4) {
            flex-direction: column !important;
            width: 100% !important;
          }

          #hero > div > div:last-child > div:nth-child(4) button {
            width: 100% !important;
          }

          /* Section Headings */
          section h2 {
            font-size: 2rem !important;
          }

          /* About Section Grid */
          #about > div > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }

          /* Skills Grid */
          #about > div > div:nth-child(4) > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          /* Onboarding Process - Stack Vertically */
          #onboarding > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          /* Projects Grid */
          .projects-grid {
            grid-template-columns: 1fr !important;
          }

          .project-card.span-2 {
            grid-column: span 1 !important;
          }

          .project-card {
            transform: none !important;
          }

          .project-card:hover {
            transform: none !important;
            border-color: rgba(255, 255, 255, 0.18) !important;
          }

          .project-image {
            opacity: 1 !important;
          }

          /* Contact Form */
          #contact form input,
          #contact form textarea {
            font-size: 0.9rem !important;
          }

          /* Hide vertical borders on mobile */
          body > div > div:nth-child(2),
          body > div > div:nth-child(3) {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          #hero h1 {
            font-size: 2rem !important;
          }

          #hero .profile-container > div {
            width: 180px !important;
            height: 180px !important;
          }

          section {
            padding: 3rem 1rem !important;
          }

          /* Skills - Single Column */
          #about > div > div:nth-child(4) > div {
            grid-template-columns: 1fr !important;
          }

          .project-card {
            padding: 1.25rem !important;
          }
        }

        @media (max-width: 425px) {
          #projects {
            padding: 3.25rem 1rem 0 1rem !important;
          }

          #projects h2 {
            font-size: 2rem !important;
          }

          .projects-grid {
            gap: 1rem !important;
          }

          .project-card {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
