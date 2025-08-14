import React from "react";
import { Box, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { motion, Variants } from "framer-motion";

const accentPurple = "rgb(135, 80, 247)";

const data = [
  { year: "2016", title: "DEVELOPMENT INTERN", company: "PRAL - FBR", location: "Islamabad" },
  { year: "2014 - 2018", title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", company: "Preston University", location: "Islamabad" },
  { year: "2018 - 2021", title: "MASTER OF SCIENCE IN COMPUTER SCIENCE", company: "FAST University", location: "Islamabad" },
  { year: "2021 - 2022", title: "WEB DEVELOPER", company: "Jashabhsoft", location: "Rawalpindi" },
  { year: "2022 - 2023", title: "MERN DEVELOPER", company: "Deewar Studios", location: "Islamabad" },
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
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)", // Same gradient as Home page
        minHeight: { xs: "auto", md: "120vh" },
        py: { xs: 3, sm: 4, md: 5 },
        px: { xs: 2, sm: 4, md: 7 },
        color: "#FFFFFF", // Base text color
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
          color: "#FFFFFF", // Accent color
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
                  backgroundColor: "#1E1033", // Slightly lighter purple-tinted dark
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  transition: "all 0.3s ease",
                  border: `1px solid transparent`,
                  "&:hover": {
                    transform: "scale(1.03)",
                    borderColor: accentPurple,
                    backgroundColor: "rgba(135, 80, 247, 0.15)",
                    boxShadow: `0 4px 12px rgba(135, 80, 247, 0.4)`,
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
                      color: "#FFFFFF",
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
                      color: accentPurple,
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
                      color: "#FFFFFF",
                    }}
                  >
                    {item.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    sx={{
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#FFFFFF",
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
      {/* Animated Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ originX: 0 }}
      >
        <Divider
          sx={{
            mt: 15,
            borderColor: accentPurple,
            borderBottomWidth: 2,
            opacity: 0.6,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Qualifications;
