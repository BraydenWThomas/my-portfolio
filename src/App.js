import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Container } from '@mui/material';
import "@fontsource/jetbrains-mono";
import { createTheme, ThemeProvider } from '@mui/material';

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
      default: "#A9BCD0", 
    },
  },

  typography: {
    fontFamily: "JetBrains Mono",
    color: '#D8DBE2',
  }

// #1C1C22
// #D8DBE2
// #A9BCD0
// #58A4B0


});

function App() {
 

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Container style={{backgroundColor: "#1c1c22"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Container>
    </Router>
    </ThemeProvider>
  );
}

export default App;