import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion, Variants } from "framer-motion";

const projectData = [
  {
    year: "2017 - 2018",
    title: "FINAL YEAR PROJECT: SPACE SHOOTER GAME",
    company: "Preston University",
    location: "Islamabad",
  },
  {
    year: "2020 - 2021",
    title: "MS-THESIS: ACTIVITY RECOGNITION IN A SMART HOME",
    company: "FAST University",
    location: "Islamabad",
  },
  {
    year: "2022 - 2023",
    title: "COLLABEES",
    company: "Deewar Studios",
    location: "Islamabad",
  },
  {
    year: "2023 - 2024",
    title: "MBVS UFONE RETAILER APP",
    company: "PTML - Ufone",
    location: "Islamabad",
  },
  {
    year: "2024 - Present",
    title: "CARES UFONE CRM",
    company: "PTML - Ufone",
    location: "Islamabad",
  },
  {
    year: "2025 - Present",
    title: "FMS UFONE",
    company: "PTML - Ufone",
    location: "Islamabad",
  },
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
      sx={{ backgroundColor: "#A4DB85", minHeight: "120vh", py: 5, px: 7 }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#002C77"
        sx={{ py: 5, px: 3 }}
        gutterBottom
      >
        Projects
      </Typography>

      <Grid container spacing={3} justifyContent="center">
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
                  borderRadius: 6,
                  backgroundColor: "#002C77",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
                elevation={3}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {project.year}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="#A4DB85"
                    gutterBottom
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
                    {project.company}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" gutterBottom>
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
