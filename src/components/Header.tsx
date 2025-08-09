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

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#A4DB85",
        color: "#002C77",
        boxShadow: 3,
        zIndex: 1100,
      }}
    >
      <MotionToolbar initial="hidden" animate="visible" variants={variants}>
        <MotionTypography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: isMobile ? "1rem" : "1.25rem",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Syed Ali Abbas
        </MotionTypography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  backgroundColor: "#A4DB85",
                  color: "#002C77",
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
                    >
                      <ListItemText
                        primary={item.label}
                        sx={{ fontWeight: "bold" }}
                      />
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
              sx={{ color: "#002C77", fontWeight: "bold" }}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
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
