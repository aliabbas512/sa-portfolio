import React from "react";
import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { motion, Variants } from "framer-motion";

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
  height: 12,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#e0e0e0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#A4DB85",
  },
}));

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number): any => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
      sx={{ backgroundColor: "#002C77", minHeight: "110vh", py: 5, px: 7 }}
    >
      <Typography
        variant="h4"
        align="center"
        color="white"
        fontWeight="bold"
        sx={{ py: 5, px: 3 }}
        gutterBottom
      >
        Skills & Proficiencies
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              custom={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography variant="subtitle1" color="white" gutterBottom>
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
    </Box>
  );
};

export default Skills;
