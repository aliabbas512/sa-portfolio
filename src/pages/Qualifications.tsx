import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const data = [
  { year: "2016", title: ".NET DEVELOPER INTERN", company: "PRAL - FBR", location: "Islamabad" },
  { year: "2014 - 2018", title: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE", company: "Preston University", location: "Islamabad" },
  { year: "2018 - 2021", title: "MASTER OF SCIENCE IN COMPUTER SCIENCE", company: "FAST University", location: "Islamabad" },
  { year: "2021 - 2022", title: "WORDPRESS DEVELOPER", company: "Jashabhsoft", location: "Rawalpindi" },
  { year: "2022 - 2023", title: "WEB DEVELOPER", company: "Deewar Studios", location: "Islamabad" },
  { year: "2023 - Present", title: "EXECUTIVE CRM DEVELOPMENT", company: "PTML - Ufone", location: "Islamabad" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  }),
};

const MotionCard = motion(Card);

const Qualifications: React.FC = () => {
  return (
    <Box id="qualifications" sx={{ backgroundColor: "#A4DB85", minHeight: "120vh", py: 5, px: 7 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="#002C77"
        sx={{ py: 5, px: 3 }}
        gutterBottom
      >
        Education & Experience
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <MotionCard
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                borderRadius: 6,
                backgroundColor: "#002C77",
                color: "#e0e0e0",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                width: "100%",
              }}
              elevation={3}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {item.year}
                </Typography>
                <Typography variant="body1" fontWeight="bold" color="#A4DB85" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                  {item.company}
                </Typography>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                  {item.location}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Qualifications;
