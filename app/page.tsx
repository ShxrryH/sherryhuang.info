"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link"; // ✅ Added

const COLORS = {
  cream: "#FBF7F0",
  cobalt: "#2E3493",
};

const projects = [
  {
    id: 1, 
    title: "The Rosemount Café",
    category: "Brand Identity",
    description: "A calm, welcoming visual identity for a neighborhood café.",
    thumbnail: "/rosemount-cafe-hero.jpg",
    Tagline:
      "Creating a clear brand strategy for the café identity my client has requested. A comprehensive branding project that brings together sophisticated design elements with the warm, inviting essence of a community café.",
    services: [
      "Brand personality",
      "Target Audience",
      "Brand guide",
      "Colour Palette",
      "Typography",
      "Custom logo",
      "Social media Assets",
    ],
    details:
      "To reach their business goals, brand vision, mission, values, positioning, voice, tone, and message. The Rosemount Café brand identity encompasses a complete visual system designed to create a cohesive and memorable customer experience.",
    gallery: [
      "/rosemount-1.png",
      "/rose-2.png",
      "/rose-11.png",
      "/rose-3.png",
      "/rose-4.png",
      "/rose-5.png",
      "/rose-6.png",
      "/rose-8.png",
      "/rose-9.png",
      "/rose-10.png",
    ],
  },
  {
    id: 2,
    title: "Molson Coors Conference",
    category: "Presentation Design · Event Branding · Digital Assets",
    tagline: "Built visuals for brands like Coors Banquet, Blue Moon, Simply, Topo Chico, Redds, Miller Lite",
    thumbnail: "/mc-hero5.png",
    description: "Designed high-volume event decks for the Molson Coors Distributor Convention at Chase Field, supporting sessions for 3,000+ attendees.",
    services: ["Brand Identity", "Packaging Design", "Visual System", "Print Design"],
    details: "More details coming soon.",
    gallery: [
      "/mc-vid.mp4",
      "/mc-1.png",
      "/mc-2.png",
      "/mc-3.png",
      "/mc-4.png",
      "/mc-5.png",
      "/mc-6.png",
      "/mc-7.png",
      "/mc-8.png",
      "/mc-9.png",
    ],
  },
  {
    id: 3,
    title: "Ūnika Swimwear",
    category: "Brand Identity · Content Production · E-Commerce Creative · Packaging Design",
    tagline: "A custom swimwear brand focused on inclusive sizing, body-positivity, and made-to-measure craftsmanship. My work strengthened the brand across content, packaging, and digital touchpoints — ensuring a unified experience from social media to retail to e-commerce.",
    thumbnail: "/unika-hero.png", 
    description: "A cohesive, content-driven identity system for a modern custom swimwear brand.",
    services: ["Research", "Prototyping"],
    details: "More details coming soon.",
    gallery: [
      "/unika-1.png",
      "/unika-2.png",
      "/unika-3.png",
      "/unika-4.png",
      "/unika-5.png", 
    ],
  },
  {
    id: 4,
    title: "Fitzrovia-10Dean",
    category: "Brand Identity Systems · Corporate Branding and logo design · Real Estate Marketing · Visual Systems",
    tagline: "Comprehensive brand systems for multi-unit developments and lifestyle properties. I developed scalable brand identities for large-scale residential developments and crafted multi-channel marketing assets that spanned signage, leasing materials, web, and paid social. The goal: create unified, premium identities that elevate Toronto rental communities and deliver consistency across teams, platforms, and tenant touchpoints.",
    thumbnail: "/10dean-hero.png",
    description: "Refined modern brand identity created for the next generation of experience-driven living spaces and upscale café bar concept.",
    services: ["Strategy", "Branding"],
    details: "More details coming soon.",
    gallery: [
      "/10dean-1.png",
      "/10dean-2.png",
      "/10dean-3.png",
      "/10dean-4.png",
      "/10dean-5.png",
      "/10dean-6.png",
    ],
  },
  {
    id: 5,
    title: "Aura",
    category: "Branding Identity",
    description: "A bold, dynamic and energetic brand identity built for the next generation of online shoppers. Fun meets self-care in this vibrant e-commerce brand.",
    thumbnail: "/aura-1.png",
    tagline: "Aura Brand Identity is a brand design project crafted for an imagined e-commerce brand aimed at supporting teenagers, students and young adults by promoting self-love, self-improvement, and confidence. The project encompassed full brand development from conceptual positioning to visual execution. The identity is friendly yet aspirational tone, combined with clean visuals, making Auras branding well-suited for a contemporary e-commerce experience.",
    services: ["Design", "Strategy", "Concept development & brand strategy", "Visual identity", "Brand guide", "Packaging design and e-commerce branding mockups", "Digital presence", "Web and social identity"],
    details: "More details coming soon.",
    gallery: [
      "/aura-16.png",
      "/aura-6.png",
      "/aura-20.png",
      "/aura-2.png",
      "/aura-3.png",
      "/aura-4.png",
      "/aura-5.png",
      "/aura-7.png",
      "/aura-8.png",
      "/aura-9.png",
      "/aura-10.png",
      "/aura-11.png",
      "/aura-12.png",
      "/aura-13.png",
      "/aura-14.png",
      "/aura-21.png",
      "/aura-15.png",
      "/aura-17.png",
      "/aura-18.png",
      "/aura-19.png"
    ],
  },
  {
    id: 6,
    title: "MORE WORK",
    category: "UGC Marketing · Content Creation · Motion Graphic · Packaging ",
    description: "Bringing brands to life through intentional content, creator-driven UGC reaching over 5000,000M viewers, and thoughtful packaging and animation design.",
    thumbnail: "/more-hero.png",
    tagline: " Creating content that helps brands reach real audiences. I have produced UGC for Buldak Global with videos reaching 80K–5M views, and developed creative content for Snappy, a restaurant POS platform, to help strengthen their digital presence and product storytelling.",
    services: ["Brand Refresh", "Social Media Design", "Digital Marketing", "Art Direction"],
    details: "More details coming soon.",
    gallery: [
      "/buldak-vid.mp4",
      "/landing.mp4",
      "/pegasus-1.png",
      "/pegasus-2.png",
      "/pegasus-3.png",
    ],
  },
];

export default function Component() {
  const controls = useAnimationControls();
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState(COLORS.cream);
  const [scrollArrowVisible, setScrollArrowVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setIsAtTop(window.scrollY < 100); // true when near top
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  useEffect(() => {
    (async () => {
      await controls.start("stage1");
      await controls.start("stage2");
      await controls.start("stage3");
      // Show scroll arrow after animations
      setTimeout(() => setScrollArrowVisible(true), 1200);
    })();
  }, [controls]);

  // Dynamic hamburger color and scroll arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Change hamburger to cobalt after scrolling past landing page (entering About Me/Video/Work sections)
      if (scrollPosition > 100) {
        setHamburgerColor(COLORS.cobalt);
      } else {
        setHamburgerColor(COLORS.cream);
      }

      // Hide scroll arrow after scrolling 150px
      if (scrollPosition > 150) {
        setScrollArrowVisible(false);
      } else {
        setScrollArrowVisible(true);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        html,
        body,
        #__next {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        .project-card .project-overlay {
          opacity: 0;
        }
        .project-card:hover .project-overlay {
          opacity: 0.95 !important;
        }
        .project-card:hover .image-container img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        {/* Star icon - home button */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            pointerEvents: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 100 100" fill={COLORS.cobalt}>
            <path d="M50 0 C50 0, 54 30, 56 40 C58 42, 60 44, 70 46 C80 48, 100 50, 100 50 C100 50, 80 52, 70 54 C60 56, 58 58, 56 60 C54 70, 50 100, 50 100 C50 100, 46 70, 44 60 C42 58, 40 56, 30 54 C20 52, 0 50, 0 50 C0 50, 20 48, 30 46 C40 44, 42 42, 44 40 C46 30, 50 0, 50 0 Z" />
          </svg>
        </a>

        {/* Hamburger menu with dynamic color */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            pointerEvents: "auto",
            width: "40px",
            height: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            position: "relative",
            zIndex: 101,
            marginRight: "0.5rem",
          }}
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 8.5 } : { rotate: 0, y: 0 }}
            style={{
              width: "32px",
              height: "3px",
              backgroundColor: menuOpen ? COLORS.cobalt : hamburgerColor,
              borderRadius: "2px",
              transformOrigin: "center",
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{
              width: "32px",
              height: "3px",
              backgroundColor: menuOpen ? COLORS.cobalt : hamburgerColor,
              borderRadius: "2px",
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -8.5 } : { rotate: 0, y: 0 }}
            style={{
              width: "32px",
              height: "3px",
              backgroundColor: menuOpen ? COLORS.cobalt : hamburgerColor,
              borderRadius: "2px",
              transformOrigin: "center",
            }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%",
          background: `linear-gradient(135deg, ${COLORS.cream} 0%, #F5F1EA 100%)`,
          zIndex: 99,
          padding: "8rem 4rem 3rem 4rem",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          boxShadow: "-8px 0 32px rgba(46, 52, 147, 0.2)",
          borderLeft: `1px solid ${COLORS.cobalt}15`,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "7rem",
            width: "4px",
            height: "200px",
            background: `linear-gradient(to bottom, ${COLORS.cobalt}, transparent)`,
            opacity: 0.3,
          }}
        />

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: COLORS.cobalt,
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            display: "block",
            position: "relative",
            paddingLeft: "1rem",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(15px)"
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(0)"
          }
        >
          Home
        </a>

        <a
          href="#work"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: COLORS.cobalt,
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            display: "block",
            position: "relative",
            paddingLeft: "1rem",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(15px)"
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(0)"
          }
        >
          Work
        </a>

        {/* ✅ About now uses Next.js Link to navigate to /about */}
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: COLORS.cobalt,
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            display: "block",
            position: "relative",
            paddingLeft: "1rem",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(15px)"
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(0)"
          }
        >
          About
        </Link>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: COLORS.cobalt,
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            transition: "all 0.3s ease",
            display: "block",
            position: "relative",
            paddingLeft: "1rem",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(15px)"
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as unknown) as HTMLElement).style.transform =
              "translateX(0)"
          }
        >
          Contact
        </a>

        <div style={{ marginTop: "auto", paddingTop: "2rem", paddingLeft: "1rem" }}>
          <div
            style={{
              width: "120px",
              height: "3px",
              background: `linear-gradient(to right, ${COLORS.cobalt}, transparent)`,
              opacity: 0.4,
            }}
          />
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.875rem",
              color: COLORS.cobalt,
              opacity: 0.6,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            © 2026 Sherry Huang
          </p>
        </div>
      </motion.div>

      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: "100vw", 
        overflow: "hidden",
        background: `linear-gradient(90deg, ${COLORS.cream} 50%, ${COLORS.cobalt} 50%)` 
      }}>
        {/* Landing Page */}
        <div
          style={{
            minHeight: "100vh", // Changed from height to allow extension
            width: "100%",
            position: "relative",
            background: `linear-gradient(90deg, ${COLORS.cream} 50%, ${COLORS.cobalt} 50%)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "6rem",
            paddingBottom: "10rem", // Increased from 6rem to fully cover the gap
            maxWidth: "100vw",
          }}
        >
          <div className="grid h-full w-full grid-cols-2 place-items-center px-4 md:px-8">
            <motion.div
              variants={{ stage1: { opacity: 1, x: 0, rotate: 0 }, hidden: { opacity: 0, x: -40, rotate: -2 } }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-10 col-span-1 flex items-center justify-center"
            >
              <motion.img
                src="/Wordmark blue.png"
                alt="Sherry Huang Wordmark"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[clamp(240px,38vw,540px)] max-w-full h-auto select-none object-contain"
                style={{
                  filter: `brightness(0) saturate(100%) invert(19%) sepia(79%) saturate(2067%) hue-rotate(227deg) brightness(93%) contrast(92%)`,
                }}
              />
            </motion.div>

            <motion.div
              variants={{ stage2: { opacity: 1, x: 0, rotate: 0 }, hidden: { opacity: 0, x: 40, rotate: 2 } }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative z-10 col-span-1 flex items-center justify-center"
            >
              <motion.img
                src="/logo blue.png"
                alt="SH Monogram"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="w-[clamp(220px,36vw,520px)] max-w-full h-auto select-none object-contain"
                style={{
                  filter: `brightness(0) saturate(100%) invert(93%) sepia(12%) saturate(150%) hue-rotate(10deg) brightness(102%) contrast(98%)`,
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 md:block"
            >
              <div
                className="w-px h-full"
                style={{ background: `linear-gradient(${COLORS.cobalt}, ${COLORS.cream})` }}
              />
            </motion.div>
          </div>

          {/* Scroll Arrow */}
          <motion.a
            href="#work"
            animate={{ opacity: scrollArrowVisible ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 20,
              cursor: "pointer",
              textDecoration: "none",
              pointerEvents: scrollArrowVisible ? "auto" : "none",
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: COLORS.cobalt,
                boxShadow: "0 4px 16px rgba(46, 52, 147, 0.3)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke={COLORS.cream}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.a>
        </div>

        {/* Solid Background Overlay - Covers parent gradient for all sections after landing */}
        <div
          style={{
            position: "absolute",
            top: "calc(100vh + 220px)",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "#FBF7F0",
            zIndex: 0,
          }}
        />

        {/* Wave Divider for Parallax Transition */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            overflow: "visible",
            zIndex: 5,
            marginTop: "6rem",
          }}
        >
          {/* Animated shadow wave behind main wave - only top curve */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 1,
              filter: "blur(12px)",
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50",
                  "M0,50 Q360,80 720,50 T1440,50",
                  "M0,50 Q360,20 720,50 T1440,50",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50"
              stroke="rgba(46, 52, 147, 0.4)"
              strokeWidth="30"
              fill="none"
            />
          </motion.svg>

          {/* Main wave */}
          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 2,
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,80 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z"
              fill="#FBF7F0"
            />
          </motion.svg>
        </div>

        {/* About Me Section */}
        <div
          style={{
            width: "100%",
            backgroundColor: "#FBF7F0",
            padding: "5rem 2rem 7rem 2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* About Me Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "3rem",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: "700",
                  color: COLORS.cobalt,
                  fontFamily: "'Inter', sans-serif",
                  margin: 0,
                }}
              >
                About Me
              </h2>
              <motion.svg
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                  fill={COLORS.cobalt}
                />
              </motion.svg>
            </motion.div>

            {/* Main Content Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "350px 1fr",
                gap: "3rem",
                marginBottom: "3rem",
              }}
            >
              {/* Left Column: Profile Picture + Contact Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Profile Picture */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: `4px solid ${COLORS.cobalt}`,
                    aspectRatio: "1/1",
                    backgroundColor: "#E5DFD8",
                  }}
                >
                  <img
                    src="/selfie.jpg"
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{
                    marginTop: "0rem",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: COLORS.cobalt,
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    Contact
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                        fill={COLORS.cobalt}
                      />
                    </svg>
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <a
                      href="mailto:sherry.huanginfo@gmail.com"
                      style={{
                        fontSize: "1rem",
                        color: COLORS.cobalt,
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        opacity: 0.85,
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                    >
                      📧 sherry.huanginfo@gmail.com
                    </a>
                    <a
                      href="https://www.behance.net/sherryhuangdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "1rem",
                        color: COLORS.cobalt,
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        opacity: 0.85,
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                    >
                      🎨 behance.net/sherryhuangdesign
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sherry-huang-356a24184/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "1rem",
                        color: COLORS.cobalt,
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        opacity: 0.85,
                        transition: "opacity 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                    >
                      💼 linkedin.com/in/sherry-huang-356a24184
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Bio + Contact Button + Technical Skills */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: "1.8",
                    color: COLORS.cobalt,
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "3.5rem",
                    opacity: 0.9,
                  }}
                >
                  Hi, I'm Sherry Huang — a graphic designer who turns complex ideas into clear, thoughtful and engaging design. With a background in brand strategy, visual identity, and digital content creation, I enjoy creating thoughtful, intentional and strategic work that connects with people. If my work resonates with you, let's connect!
                </p>

                {/* Contact Button */}
                <motion.a
                  href="mailto:sherry.huanginfo@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1.125rem 2.5rem",
                    backgroundColor: COLORS.cobalt,
                    color: COLORS.cream,
                    fontSize: "1.0625rem",
                    fontWeight: "600",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    border: `2px solid ${COLORS.cobalt}`,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    marginBottom: "2.5rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.cream;
                    e.currentTarget.style.color = COLORS.cobalt;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.cobalt;
                    e.currentTarget.style.color = COLORS.cream;
                  }}
                >
                  Contact Me
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>

                {/* Technical Skills */}
                <div style={{ marginTop: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: COLORS.cobalt,
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    Technical Skills
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                        fill={COLORS.cobalt}
                      />
                    </svg>
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Adobe Illustrator */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS.cobalt,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: COLORS.cream,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Ai
                      </span>
                    </motion.div>

                    {/* Adobe Photoshop */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS.cobalt,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: COLORS.cream,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Ps
                      </span>
                    </motion.div>

                    {/* Adobe InDesign */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS.cobalt,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: COLORS.cream,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Id
                      </span>
                    </motion.div>

                    {/* Figma */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS.cobalt,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: COLORS.cream,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        F
                      </span>
                    </motion.div>

                    {/* Microsoft PowerPoint */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: COLORS.cobalt,
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: COLORS.cream,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        PP
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        

        {/* Background Fill - Between About Me and Video */}
        <div
          style={{
            width: "100%",
            height: "160px",
            backgroundColor: "#FBF7F0",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Wave Divider - About Me to Video */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            overflow: "visible",
            zIndex: 5,
            marginTop: "0",
            backgroundColor: "#FBF7F0",
          }}
        >
          {/* Animated shadow wave behind main wave */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 1,
              filter: "blur(12px)",
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50",
                  "M0,50 Q360,80 720,50 T1440,50",
                  "M0,50 Q360,20 720,50 T1440,50",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50"
              stroke="rgba(46, 52, 147, 0.4)"
              strokeWidth="30"
              fill="none"
            />
          </motion.svg>

          {/* Main wave */}
          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 2,
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,80 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z"
              fill="#F2E8D0"
            />
          </motion.svg>
        </div>

        {/* Video Section */}
        <div
          style={{
            width: "100%",
            position: "relative",
            backgroundColor: "#F2E8D0",
            padding: "0rem 6rem 10rem 6rem",
            marginTop: "0px",
            border: "none",
            boxShadow: "none",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              border: "none",
              boxShadow: "none",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginBottom: "-80px",
                border: "none",
                boxShadow: "none",
                outline: "none",
              }}
            >
              <source src="/aura-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Background Fill - Covers parent gradient */}
        <div
          style={{
            width: "100%",
            height: "80px",
            backgroundColor: "#F2E8D0",
            position: "relative",
            zIndex: 1,
          }}
        />

        {/* Wave Divider - Video to Work */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            overflow: "visible",
            zIndex: 5,
            marginTop: "0",
            backgroundColor: "#F2E8D0",
          }}
        >
          {/* Animated shadow wave behind main wave */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 1,
              filter: "blur(12px)",
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50",
                  "M0,50 Q360,80 720,50 T1440,50",
                  "M0,50 Q360,20 720,50 T1440,50",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50"
              stroke="rgba(46, 52, 147, 0.4)"
              strokeWidth="30"
              fill="none"
            />
          </motion.svg>

          {/* Main wave */}
          <motion.svg
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute",
              bottom: "0",
              left: "0",
              width: "100%",
              height: "120px",
              transform: "translateY(0)",
              zIndex: 2,
            }}
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <motion.path
              animate={{
                d: [
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,80 720,50 T1440,50 L1440,120 L0,120 Z",
                  "M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              d="M0,50 Q360,20 720,50 T1440,50 L1440,120 L0,120 Z"
              fill="#FBF7F0"
            />
          </motion.svg>
        </div>

        {/* Work Section */}
        <div
          id="work"
          className="relative"
          style={{
            backgroundColor: COLORS.cream,
            minHeight: "100vh",
            paddingTop: "2rem",
            paddingBottom: "4rem",
            paddingLeft: "clamp(1rem, 3vw, 2rem)",
            paddingRight: "clamp(1rem, 3vw, 2rem)",
            width: "100%",
            maxWidth: "100vw",
            overflow: "hidden",
            boxSizing: "border-box",
            zIndex: 1,
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
            <div style={{ width: "100%", boxSizing: "border-box" }}>
              <div style={{ position: "relative", marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    fontWeight: "700",
                    color: COLORS.cobalt,
                    marginBottom: "1rem",
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Featured Projects
                </h2>

                <p
                  style={{
                    fontSize: "1.125rem",
                    color: COLORS.cobalt,
                    maxWidth: "700px",
                    lineHeight: "1.8",
                    fontFamily: "'Inter', sans-serif",
                    opacity: 0.85,
                  }}
                >
                  A collection of branding, design, and creative projects that showcase my passion for visual storytelling
                  and attention to detail.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                  marginTop: "2rem",
                  marginBottom: "2.5rem",
                  width: "100%",
                }}
              >
                {projects
                  .filter((p) => p)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      style={{ cursor: "pointer", position: "relative", width: "100%" }}
                      className="project-card"
                    >
                      <div
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: `2px solid ${COLORS.cobalt}`,
                          overflow: "hidden",
                          boxShadow: "0 2px 12px rgba(46, 52, 147, 0.08)",
                          transition: "all 0.3s ease",
                          position: "relative",
                          height: "100%",
                        }}
                      >
                        <div
                          className="image-container"
                          style={{
                            height: "280px",
                            backgroundColor: "#E5DFD8",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <img
                            src={project.thumbnail}
                            alt={project.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              transition: "transform 0.4s ease",
                            }}
                          />
                          <div
                            className="project-overlay"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              backgroundColor: COLORS.cobalt,
                              opacity: 0,
                              transition: "opacity 0.3s ease",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              pointerEvents: "none",
                            }}
                          >
                            <span
                              style={{
                                color: COLORS.cream,
                                fontSize: "1.125rem",
                                fontWeight: "600",
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: "0.02em",
                              }}
                            >
                              View Project →
                            </span>
                          </div>
                        </div>

                        <div style={{ padding: "1.25rem 1.5rem", backgroundColor: "#FFFFFF" }}>
                          <div
                            style={{
                              fontSize: "0.7rem",
                              fontWeight: "700",
                              color: COLORS.cobalt,
                              textTransform: "uppercase",
                              letterSpacing: "0.15em",
                              marginBottom: "0.4rem",
                              fontFamily: "'Inter', sans-serif",
                              opacity: 0.7,
                            }}
                          >
                            {project.category}
                          </div>
                          <h3
                            style={{
                              fontSize: "1.375rem",
                              fontWeight: "700",
                              color: COLORS.cobalt,
                              marginBottom: "0.4rem",
                              fontFamily: "'Inter', sans-serif",
                              lineHeight: "1.3",
                            }}
                          >
                            {project.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.95rem",
                              color: COLORS.cobalt,
                              lineHeight: "1.5",
                              fontFamily: "'Inter', sans-serif",
                              opacity: 0.85,
                            }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>

             {/*
              <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
                <motion.a
                  href="/work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1.125rem 2.75rem",
                    backgroundColor: COLORS.cobalt,
                    color: COLORS.cream,
                    fontSize: "1.0625rem",
                    fontWeight: "600",
                    fontFamily: "'Inter', sans-serif",
                    textDecoration: "none",
                    border: `2px solid ${COLORS.cobalt}`,
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.cream;
                    e.currentTarget.style.color = COLORS.cobalt;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.cobalt;
                    e.currentTarget.style.color = COLORS.cream;
                  }}
                >
                  View All Projects
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "0.5rem" }}>
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: COLORS.cobalt,
          color: COLORS.cream,
          padding: "4rem 2rem 2rem",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Main Footer Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "3rem",
              marginBottom: "3rem",
              paddingBottom: "3rem",
              borderBottom: `1px solid ${COLORS.cream}40`,
            }}
          >
            {/* Brand Column */}
            <div>
              <motion.div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: COLORS.cream,
                    margin: 0,
                  }}
                >
                  Sherry Huang
                </h3>
                <motion.svg
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
                    fill={COLORS.cream}
                  />
                </motion.svg>
              </motion.div>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  opacity: 0.85,
                  margin: 0,
                  marginBottom: "1.5rem",
                }}
              >
              
              </p>
              <motion.a
                href="mailto:sherry.huanginfo@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: COLORS.cream,
                  color: COLORS.cobalt,
                  fontSize: "1rem",
                  fontWeight: "700",
                  fontFamily: "'Inter', sans-serif",
                  textDecoration: "none",
                  borderRadius: "8px",
                  border: `2px solid ${COLORS.cream}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = COLORS.cream;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.cream;
                  e.currentTarget.style.color = COLORS.cobalt;
                }}
              >
                Let's Connect
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.a>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: COLORS.cream,
                }}
              >
                Quick Links
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {["About", "Work", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    style={{
                      fontSize: "1rem",
                      color: COLORS.cream,
                      textDecoration: "none",
                      opacity: 0.85,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: COLORS.cream,
                }}
              >
                Connect
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <motion.a
                  href="mailto:sherry.huanginfo@gmail.com"
                  whileHover={{ x: 5 }}
                  style={{
                    fontSize: "1rem",
                    color: COLORS.cream,
                    textDecoration: "none",
                    opacity: 0.85,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                >
                  <span>📧</span> Email
                </motion.a>
                <motion.a
                  href="https://www.behance.net/sherryhuangdesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    fontSize: "1rem",
                    color: COLORS.cream,
                    textDecoration: "none",
                    opacity: 0.85,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                >
                  <span>🎨</span> Behance
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sherry-huang-356a24184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  style={{
                    fontSize: "1rem",
                    color: COLORS.cream,
                    textDecoration: "none",
                    opacity: 0.85,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
                >
                  <span>💼</span> LinkedIn
                </motion.a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: COLORS.cream,
                }}
              >
                Skills
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                {["Ai", "Ps", "Id", "F", "PP"].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, y: -5 }}
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: COLORS.cream,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: COLORS.cobalt,
                      }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                opacity: 0.7,
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Sherry Huang. All rights reserved.
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                opacity: 0.7,
                margin: 0,
              }}
            >
              Designed with ✨ in Toronto
            </p>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(46, 52, 147, 0.95)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            overflowY: "auto",
          }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: COLORS.cream,
              borderRadius: "24px",
              maxWidth: "1200px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: COLORS.cobalt,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke={COLORS.cream} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>

            <div style={{ padding: "3rem" }}>
              {/* Header */}
              <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: COLORS.cobalt,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedProject.category}
                </div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    fontWeight: "600",
                    color: COLORS.cobalt,
                    marginBottom: "0.5rem",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {selectedProject.title}
                </h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: COLORS.cobalt,
                    fontStyle: "italic",
                    fontFamily: "'Inter', sans-serif",
                    opacity: 0.8,
                  }}
                >
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Vertical Scrolling Gallery */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {selectedProject.gallery?.map((media, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      backgroundColor: COLORS.cobalt + "10",
                    }}
                  >
                    {media.endsWith('.mp4') ? (
                      <video
                        controls
                        autoPlay
                        loop
                        muted
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      >
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={media}
                        alt={`${selectedProject.title} - Image ${idx + 1}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}