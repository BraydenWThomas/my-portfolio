import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Container } from "@mui/material";
import "@fontsource/jetbrains-mono";
import { createTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";

// Styles for Material UI components
const theme = createTheme({
  palette: {
    primary: {
      main: "#58A4B0",
    },
    secondary: {
      main: "#81B0C0",
    },
    background: {
      default: "#28272C",
    },
  },
  typography: {
    fontFamily: "JetBrains Mono",
    color: "#D8DBE2",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop /> 
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <Container style={{ flex: 1, backgroundColor: "#1c1c22" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
