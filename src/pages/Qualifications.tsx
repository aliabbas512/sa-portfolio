import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion, Variants } from "framer-motion";

const data = [
  { year: "2016", title: ".NET DEVELOPER INTERN", company: "PRAL - FBR", location: "Islamabad" },
  { year: "2014 - 2018", title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", company: "Preston University", location: "Islamabad" },
  { year: "2018 - 2021", title: "MASTER OF SCIENCE IN COMPUTER SCIENCE", company: "FAST University", location: "Islamabad" },
  { year: "2021 - 2022", title: "WORDPRESS DEVELOPER", company: "Jashabhsoft", location: "Rawalpindi" },
  { year: "2022 - 2023", title: "WEB DEVELOPER", company: "Deewar Studios", location: "Islamabad" },
  { year: "2023 - Present", title: "EXECUTIVE CRM DEVELOPMENT", company: "PTML - Ufone", location: "Islamabad" },
];

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Qualifications: React.FC = () => {
  return (
    <Box
      id="qualifications"
      sx={{
        backgroundColor: "#0F172A", // Match Home page background color
        minHeight: "120vh",
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 7 },
        color: "#F8FAFC", // Near white base text color consistent with Home page
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{
          py: { xs: 3, sm: 4, md: 5 },
          px: { xs: 1, sm: 2, md: 3 },
          fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
          fontFamily: "'Inter', sans-serif",
          color: "#38BDF8", // Accent color same as Home page
        }}
        gutterBottom
      >
        Education & Experience
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
              style={{ flex: 1, display: "flex" }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  backgroundColor: "#1E293B", // Slightly lighter dark for contrast, same as Home page card hover background
                  color: "#F8FAFC",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 20px rgba(56, 189, 248, 0.5)", // Neon blue glow matching accent color
                  },
                }}
                elevation={3}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#F8FAFC", // Base text color
                      fontFamily: "'Roboto Mono', monospace",
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      color: "#38BDF8", // Accent color for titles
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#CBD5E1", // Muted secondary text
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#94A3B8", // Muted tertiary text
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.location}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Qualifications;
