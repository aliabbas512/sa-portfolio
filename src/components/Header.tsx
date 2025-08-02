import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { motion, Variants } from "framer-motion";

const MotionToolbar = motion(Toolbar);
const MotionTypography = motion(Typography);
// const MotionImg = motion.img;
const MotionButton = motion(Button);

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const variants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.4 },
  }),
};

const Header = () => (
  <AppBar
    position="sticky"
    sx={{
      backgroundColor: "#A4DB85",
      color: "#002C77",
      boxShadow: 3,
      zIndex: 1100,
    }}
  >
    <MotionToolbar
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {/* <MotionImg
        src="/images/logo.png"
        alt="Logo"
        style={{ height: 40, marginRight: 10 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      /> */}
      <MotionTypography
        variant="h6"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Syed Ali Abbas
      </MotionTypography>
      {navItems.map((item, index) => (
        <MotionButton
          key={item.label}
          href={item.href}
          sx={{ color: "#002C77", fontWeight: "bold" }}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
        >
          {item.label}
        </MotionButton>
      ))}
    </MotionToolbar>
  </AppBar>
);

export default Header;
