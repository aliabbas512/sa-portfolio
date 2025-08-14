import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, Variants } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const MotionToolbar = motion(Toolbar);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Qualifications", href: "#qualifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const variants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.25, ease: "easeOut" },
  }),
};

const accentPurple = "rgb(135, 80, 247)";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)",
        color: "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
        zIndex: 1100,
      }}
    >
      <MotionToolbar initial="hidden" animate="visible" variants={headerVariants}>
        {/* Logo + Name */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <motion.img
            src="/images/logo.png"
            alt="Logo"
            style={{
              width: isMobile ? 32 : 42,
              height: "auto",
              marginRight: 10,
              userSelect: "none",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          />
          <MotionTypography
            variant="h1"
            sx={{
              fontSize: isMobile ? "1rem" : "1.5rem",
              color: "#FFFFFF",
              userSelect: "none",
              textTransform: "uppercase",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          >
            Syed Ali Abbas
          </MotionTypography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: accentPurple,
                "&:hover": {
                  backgroundColor: "rgba(135, 80, 247, 0.15)",
                  transition: "background-color 0.3s ease",
                },
              }}
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#1A0B2E",
                  color: "#FFFFFF",
                },
              }}
            >
              <List sx={{ width: 200 }}>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      component="a"
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        fontWeight: 500,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        "&:hover": {
                          backgroundColor: "rgba(135, 80, 247, 0.15)",
                          textDecoration: "underline",
                          textDecorationColor: accentPurple,
                        },
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          navItems.map((item, index) => (
            <MotionButton
              key={item.label}
              href={item.href}
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                position: "relative",
                paddingBottom: "4px",
                fontSize: "1rem",
                textTransform: "uppercase",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: accentPurple,
                  transition: "width 0.2s ease-out",
                },
                "&:hover": {
                  color: accentPurple,
                  "&:before": {
                    width: "100%",
                  },
                },
              }}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {item.label}
            </MotionButton>
          ))
        )}
      </MotionToolbar>
    </AppBar>
  );
};

export default Header;
