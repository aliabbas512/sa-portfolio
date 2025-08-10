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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: "#0F172A", // Dark theme background
        color: "#F8FAFC",
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
                  border: "3px solid #38BDF8", // Accent border
                }}
              />
              <Box mt={{ xs: 3, sm: 4 }} textAlign="center">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    color: "#38BDF8", // Accent color for name
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
                color: "#38BDF8", // Accent for heading
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                color: "#F8FAFC",
              }}
            >
              I am a web developer specializing in designing, building,
              testing, and debugging modern web applications. Proficient in
              HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Angular.js,
              Node.js, Express.js, MongoDB, and OracleDB. Capable of working
              independently on projects while being a reliable and
              collaborative team member.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={4}
              alignItems="center"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="outlined"
                size="small"
                href="https://drive.google.com/file/d/1F-X-71cTxNIIwLsOPgO0qlWmXZsUgfga/view?usp=sharing"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  color: "#38BDF8",
                  borderColor: "#38BDF8",
                  "&:hover": {
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderColor: "#38BDF8",
                  },
                }}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/aliabbassyed512/"
                target="_blank"
                size="small"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  color: "#38BDF8",
                  borderColor: "#38BDF8",
                  "&:hover": {
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderColor: "#38BDF8",
                  },
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/aliabbas512"
                target="_blank"
                size="small"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  color: "#38BDF8",
                  borderColor: "#38BDF8",
                  "&:hover": {
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderColor: "#38BDF8",
                  },
                }}
              >
                GitHub
              </Button>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
