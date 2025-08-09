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
        backgroundColor: "#f5f5f5",
        minHeight: { xs: "auto", md: "120vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "flex-start", md: "space-between" },
        py: 8,
        px: { xs: 2, sm: 5, md: 10 },
      }}
    >
      {/* Animated Contact Form */}
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
            backgroundColor: "#ffffff",
            p: 5,
            borderRadius: 3,
            boxShadow: 3,
            maxWidth: "600px",
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#002C77", fontWeight: "bold", mb: 4 }}
            gutterBottom
          >
            Contact Me
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
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
              backgroundColor: "#002C77",
              color: "#A4DB85",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#001f5c",
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

      {/* Animated Footer */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Box
          component="footer"
          sx={{
            mt: 8,
            py: 3,
            px: 2,
            textAlign: "center",
            backgroundColor: "#002C77",
            color: "#A4DB85",
            borderTop: "1px solid #A4DB85",
            width: "100vw",
            ml: "calc(-50vw + 50%)",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Syed Ali Abbas.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            Let’s build something great together
            <a
              href="mailto:aliabbasshah72@gmail.com?subject=Contact Me&body=Hi Syed Ali,"
              style={{
                color: "#A4DB85",
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
                color: "#A4DB85",
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
                color: "#A4DB85",
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
