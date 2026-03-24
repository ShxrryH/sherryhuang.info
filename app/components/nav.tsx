"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const COLORS = {
  cream: "#FBF7F0",
  cobalt: "#2E3493",
};

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [onWork, setOnWork] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    const target = document.getElementById("work");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnWork(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const barColor = isOpen ? COLORS.cobalt : (onWork ? COLORS.cobalt : COLORS.cream);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: "100%",
          padding: "1.5rem 0",
        }}
        aria-label="Primary"
      >
        <div
          style={{
            width: "calc(100% - 4rem)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
              aria-hidden="true"
            >
              <path
                d="M50 0 C55 30, 70 45, 100 50 C70 55, 55 70, 50 100 C45 70, 30 55, 0 50 C30 45, 45 30, 50 0 Z"
                fill={COLORS.cobalt}
              />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen((v) => !v)}
            style={{
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
              flexShrink: 0,
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: barColor,
                display: "block",
                borderRadius: "2px",
                transition: "background-color 200ms ease",
              }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: barColor,
                display: "block",
                borderRadius: "2px",
                transition: "background-color 200ms ease",
              }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: barColor,
                display: "block",
                borderRadius: "2px",
                transition: "background-color 200ms ease",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {isOpen && (
        <motion.div
          id="site-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.cream,
            zIndex: 40,
          }}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              gap: "2rem",
            }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  fontSize: "4rem",
                  fontWeight: 600,
                  color: COLORS.cobalt,
                  textDecoration: "none",
                  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}