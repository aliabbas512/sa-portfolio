import React, { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (formRef.current) {
        formRef.current.submit();
        resetForm();
      }
    },
  });

  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(90deg, #0D021F 0%, #1A0B2E 100%)",
        minHeight: { xs: "auto", md: "120vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", md: "space-between" },
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 10, lg: 14 },
        color: "#FFFFFF",
      }}
    >
      {/* Contact Form */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            backgroundColor: "#1E1033",
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            maxWidth: "600px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
              fontFamily: "'Inter', sans-serif",
            }}
            gutterBottom
          >
            Let's work together!
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            variant="filled"
            InputProps={{
              style: { backgroundColor: "#0D021F", color: "#FFFFFF" },
            }}
            InputLabelProps={{ style: { color: "#A78BFA" } }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            variant="filled"
            InputProps={{
              style: { backgroundColor: "#0D021F", color: "#FFFFFF" },
            }}
            InputLabelProps={{ style: { color: "#A78BFA" } }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            margin="normal"
            multiline
            rows={4}
            label="Message"
            name="message"
            variant="filled"
            InputProps={{
              style: { backgroundColor: "#0D021F", color: "#FFFFFF" },
            }}
            InputLabelProps={{ style: { color: "#A78BFA" } }}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "rgb(135, 80, 247)",
              color: "#FFFFFF",
              fontWeight: "bold",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#8B5CF6",
                transform: "translateY(-3px)",
                boxShadow: "0px 4px 15px rgba(135,80,247,0.6)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </motion.div>

      {/* Hidden Form */}
      <form
        ref={formRef}
        action="https://formsubmit.co/aliabbasshah72@gmail.com"
        method="POST"
        style={{ display: "none" }}
      >
        <input type="text" name="name" value={formik.values.name} readOnly />
        <input type="email" name="email" value={formik.values.email} readOnly />
        <input
          type="text"
          name="message"
          value={formik.values.message}
          readOnly
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://your-portfolio.com/thank-you"
        />
      </form>

      {/* Footer */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          component="footer"
          sx={{
            mt: { xs: 6, sm: 8 },
            py: { xs: 2, sm: 3 },
            px: { xs: 2, sm: 4 },
            textAlign: "center",
            backgroundColor: "#1E1033",
            color: "#FFFFFF",
            borderTop: "1px solid rgba(135, 80, 247, 0.4)",
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "0.85rem", sm: "0.95rem" } }}
          >
            © {new Date().getFullYear()} Syed Ali Abbas.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1.5, sm: 2 },
              flexWrap: "wrap",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
            }}
          >
            Let’s build something great together
            <a
              href="mailto:aliabbasshah72@gmail.com?subject=Contact Me&body=Hi Syed Ali,"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <EmailIcon fontSize="small" />
              Gmail
            </a>
            <a
              href="https://github.com/aliabbas512"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aliabbassyed512/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </a>
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
