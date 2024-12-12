import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#D8DBE2',
    padding: theme.spacing(4, 0),
    marginTop: 'auto',
  },
  footerLink: {
    color: '#58A4B0',
    '&:hover': {
      color: '#81B0C0',
    },
  },
  footerText: {
    textAlign: 'center',
    color: '#D8DBE2',
    fontSize: '0.9rem',
    marginTop: theme.spacing(2),
  },
  footerGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 item xs={12} sm={4} className={classes.footerGridItem}>
            <Typography variant="h6">Quick Links</Typography>
            <NavLink to="/" className={classes.footerLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={classes.footerLink}>
              About
            </NavLink>
            <NavLink to="/projects" className={classes.footerLink}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={classes.footerLink}>
              Contact
            </NavLink>
          </Grid2>
          <Grid2 item xs={12} sm={4} className={classes.footerGridItem}>
            <Typography variant="h6">Follow Me</Typography>
            <a
              href="https://github.com/BraydenWThomas"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerLink}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brayden-w-thomas/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerLink}
            >
              LinkedIn
            </a>
          </Grid2>
          <Grid2 item xs={12} sm={4} className={classes.footerGridItem}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Email: Brayden.William.Thomas@gmail.com</Typography>
            <Typography variant="body2">Phone: +61 484 339 787</Typography>
          </Grid2>
        </Grid2>
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} Brayden. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
