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
        backgroundColor: "#002C77",
        color: "#A4DB85",
        minHeight: "100vh",
        py: 5,
        px: { xs: 2, sm: 4, md: 7 },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Avatar Section */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                alt="Syed Ali Abbas"
                src="/images/profile.jpg"
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: 5,
                  boxShadow: 4,
                }}
              />
              <Box mt={4} textAlign="center">
                <Typography variant="h4" fontWeight="bold">
                  Syed Ali Abbas
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  Web Developer
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Grid>
        {/* About Me Section */}
        <Grid item xs={12} md={7} alignItems="center" justifyContent="center" sx={{ ml: { xs: 1.5, md: 0 },  mt: { xs: 5, md: 0 } }}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: { xs: 'none', md: 'block' }, }}>
              ABOUT ME
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ lineHeight: 2 }}>
              I am a web developer specializing in designing, building, testing, and debugging 
              modern web applications. Proficient in HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, 
              Angular.js, Node.js, Express.js, MongoDB, and OracleDB. Capable of working independently 
              on projects while being a reliable and collaborative team member.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={4}
              alignItems="center"
              flexWrap="wrap"
            >
              <Button
                variant="outlined"
                color="inherit"
                href="https://drive.google.com/file/d/1F-X-71cTxNIIwLsOPgO0qlWmXZsUgfga/view?usp=sharing"
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/aliabbassyed512/"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<GitHubIcon />}
                href="https://github.com/aliabbas512"
                target="_blank"
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
