import React, { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Qualifications from "./pages/Qualifications";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#002C77",
    },
    secondary: {
      main: "#A4DB85",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    // allVariants: {
    //   color: "#002C77",
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Inter', sans-serif",
        },
        code: {
          fontFamily: "'Roboto Mono', monospace",
        },
        pre: {
          fontFamily: "'Roboto Mono', monospace",
        },
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "auto", block: "start" });
        window.history.replaceState(null, "", "#home");
      }
    }, 50);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div id="home"><Home /></div>
      <div id="qualifications"><Qualifications /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </ThemeProvider>
  );
};

export default App;
