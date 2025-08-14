import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  linearProgressClasses,
  styled,
  Divider,
} from "@mui/material";
import { motion, Variants } from "framer-motion";

const accentPurple = "rgb(135, 80, 247)";

const skills = [
  { label: "Programming Skills", value: 70 },
  { label: "HTML, CSS, Bootstrap", value: 80 },
  { label: "Git, CI/CD Pipelines", value: 85 },
  { label: "Presentation/Communication", value: 75 },
  { label: "JavaScript", value: 85 },
  { label: "SQL/NoSQL Database", value: 80 },
  { label: "Critical Thinking", value: 65 },
  { label: "React.js & Angular.js", value: 75 },
  { label: "WordPress Development", value: 70 },
  { label: "Problem Solving", value: 78 },
  { label: "Express.js & Node.js", value: 73 },
];

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#1E1033", // darker purple background for track
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: accentPurple, // accent purple bar
    transition: "all 0.4s ease",
  },
}));

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)", // theme gradient
        minHeight: { xs: "auto", md: "120vh" },
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 4, md: 7 },
        color: "#FFFFFF",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{
          py: { xs: 3, sm: 4, md: 5 },
          fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
          color: "#FFFFFF",
        }}
        gutterBottom
      >
        Skills & Proficiencies
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              custom={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                transition: "transform 0.3s ease",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                {skill.label}
              </Typography>
              <BorderLinearProgress
                variant="determinate"
                value={skill.value}
              />
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

export default Skills;
