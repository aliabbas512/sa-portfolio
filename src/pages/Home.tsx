import React from "react";
import { Typography, Grid, Avatar, Button, Box, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const accentPurple = "rgb(135, 80, 247)";

// Animated "Hi" keyframes
const hiWave = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(2deg) scale(1.05); }
  100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
`;

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        position: "relative", // for background Hi
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)",
        color: "#FFFFFF",
        minHeight: "100vh",
        py: { xs: 3, sm: 5 }, // reduced top padding for better alignment
        px: { xs: 2, sm: 4, md: 7 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Outlined "Hi" */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "6rem", md: "15rem" },
          fontWeight: "bold",
          color: "transparent", // No fill
          WebkitTextStroke: "2px rgba(85, 0, 255, 0.1)", // Outline color
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
          animation: `${hiWave} 6s ease-in-out infinite`,
        }}
      >
        Hi
      </Box>

      {/* Main Grid for Avatar + About */}
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          position: "relative",
          zIndex: 1, // above the Hi
        }}
      >
        {/* Avatar Section */}
        <Grid item xs={12} md={5}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt="Syed Ali Abbas"
                src="/images/profile.jpg"
                sx={{
                  width: { xs: 180, sm: 220, md: 280, lg: 300 },
                  height: { xs: 180, sm: 220, md: 280, lg: 300 },
                  borderRadius: 5,
                  boxShadow: 4,
                  border: `3px solid ${accentPurple}`,
                  transition: "all 0.35s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: `0 8px 20px rgba(135, 80, 247, 0.6)`,
                    borderColor: "#fff",
                  },
                }}
              />
              <Typography
                component="h1"
                sx={{
                  mt: { xs: 3, sm: 4 },
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: "bold",
                  lineHeight: 1.2,
                  background: "linear-gradient(90deg, #8750F7, #BC6FF1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                }}
              >
                Web Developer
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* About Me Section */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: { md: "1.5rem", lg: "1.75rem" },
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.05rem" },
              }}
            >
              I am a web developer with expertise in designing, building, and improving 
              modern web applications. Skilled in HTML, CSS, Bootstrap, JavaScript, jQuery, 
              React.js, Angular.js, Node.js, Express.js, MongoDB, and OracleDB. Able to deliver 
              quality results independently or as part of a team.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={4}
              alignItems="center"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {[
                {
                  label: "Resume",
                  href: "https://drive.google.com/file/d/1F-X-71cTxNIIwLsOPgO0qlWmXZsUgfga/view?usp=sharing",
                  icon: <DownloadIcon />,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/aliabbassyed512/",
                  icon: <LinkedInIcon />,
                },
                {
                  label: "GitHub",
                  href: "https://github.com/aliabbas512",
                  icon: <GitHubIcon />,
                },
              ].map((btn) => (
                <Button
                  key={btn.label}
                  variant="outlined"
                  startIcon={btn.icon}
                  href={btn.href}
                  target="_blank"
                  size="small"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    color: "#FFFFFF",
                    borderColor: accentPurple,
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                      backgroundColor: "rgba(135, 80, 247, 0.15)",
                      borderColor: accentPurple,
                      transform: "scale(1.05)",
                      boxShadow: `0 4px 12px rgba(135, 80, 247, 0.4)`,
                    },
                  }}
                >
                  {btn.label}
                </Button>
              ))}
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 3, md: 4 }, // slightly reduced for tighter alignment
          px: { xs: 2, sm: 4, md: 7 },
          mt: { xs: 3, md: 5 },
          maxWidth: "1200px",
          mx: "auto",
          position: "relative",
          zIndex: 1, // above background
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {[
            { value: "5", label: "Years of Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "10+", label: "Systems Deployed" },
            // { value: "10+", label: "Technical Certifications" },
            { value: "10+", label: "Technologies Mastered" },
          ].map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ textAlign: "center" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.85rem", md: "1rem" },
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                  }}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
