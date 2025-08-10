import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion, Variants } from "framer-motion";

const projectData = [
  { year: "2017 - 2018", title: "FINAL YEAR PROJECT: SPACE SHOOTER GAME", company: "Preston University", location: "Islamabad" },
  { year: "2020 - 2021", title: "MS-THESIS: ACTIVITY RECOGNITION IN A SMART HOME", company: "FAST University", location: "Islamabad" },
  { year: "2022 - 2023", title: "COLLABEES", company: "Deewar Studios", location: "Islamabad" },
  { year: "2023 - 2024", title: "MBVS UFONE RETAILER APP", company: "PTML - Ufone", location: "Islamabad" },
  { year: "2024 - Present", title: "CARES UFONE CRM", company: "PTML - Ufone", location: "Islamabad" },
  { year: "2025 - Present", title: "FMS UFONE", company: "PTML - Ufone", location: "Islamabad" },
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

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#0F172A", // Match Qualifications background
        minHeight: "120vh",
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 7 },
        color: "#F8FAFC", // Base text color
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
          color: "#38BDF8", // Accent color same as Qualifications
        }}
        gutterBottom
      >
        Projects
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center">
        {projectData.map((project, index) => (
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
                  backgroundColor: "#1E293B", // Card background same as Qualifications
                  color: "#F8FAFC",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 20px rgba(56, 189, 248, 0.5)", // Neon blue glow
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
                      color: "#F8FAFC",
                      fontFamily: "'Roboto Mono', monospace",
                    }}
                  >
                    {project.year}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      color: "#38BDF8", // Accent color for title
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#CBD5E1",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {project.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#94A3B8",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {project.location}
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

export default Projects;
