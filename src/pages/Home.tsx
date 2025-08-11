import React from "react";
import {
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const accentPurple = "rgb(135, 80, 247)";

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)",
        color: "#FFFFFF",
        minHeight: "100vh",
        pt: { xs: 4, sm: 5 },
        pb: { xs: 2, sm: 3 },
        px: { xs: 2, sm: 4, md: 7 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
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
              <Box mt={{ xs: 3, sm: 4 }} textAlign="center">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    color: "#FFFFFF",
                  }}
                >
                  Web Developer
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/* About Me Section */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            ml: { xs: 0, md: 0 },
            mt: { xs: 4, md: 0 },
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
                color: "#FFFFFF",
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                color: "#FFFFFF",
              }}
            >
              I am a web developer specializing in designing, building, testing,
              and debugging modern web applications. Proficient in HTML, CSS,
              Bootstrap, JavaScript, jQuery, React.js, Angular.js, Node.js,
              Express.js, MongoDB, and OracleDB. Capable of working
              independently on projects while being a reliable and collaborative
              team member.
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
                    backgroundColor: "transparent",
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
    </Box>
  );
};

export default Home;
