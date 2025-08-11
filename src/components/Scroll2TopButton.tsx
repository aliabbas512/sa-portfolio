import React, { useState, useEffect, useCallback } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { motion } from "framer-motion";

const SCROLL_THRESHOLD = 300;

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null; // ✅ fixes TypeScript error

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 999,
      }}
    >
      <Fab
        size="medium"
        onClick={scrollToTop}
        sx={{
          backgroundColor: "transparent",
          border: "1.5px solid #9b5de5",
          color: "#9b5de5",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#9b5de520",
            boxShadow: "0 4px 12px rgba(155, 93, 229, 0.4)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </motion.div>
  );
};

export default ScrollToTopButton;
