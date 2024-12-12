import React from 'react';
import { Container, Grid2, Typography, Link, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'red',
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
            <Link href="/" className={classes.footerLink} variant="body2">
              Home
            </Link>
            <Link href="/about" className={classes.footerLink} variant="body2">
              About
            </Link>
            <Link href="/projects" className={classes.footerLink} variant="body2">
              Projects
            </Link>
            <Link href="/contact" className={classes.footerLink} variant="body2">
              Contact
            </Link>
          </Grid2>
          <Grid2 item xs={12} sm={4} className={classes.footerGridItem}>
            <Typography variant="h6">Follow Us</Typography>
            <Link href="#" className={classes.footerLink} variant="body2">
              Facebook
            </Link>
            <Link href="#" className={classes.footerLink} variant="body2">
              Twitter
            </Link>
            <Link href="#" className={classes.footerLink} variant="body2">
              LinkedIn
            </Link>
          </Grid2>
          <Grid2 item xs={12} sm={4} className={classes.footerGridItem}>
            <Typography variant="h6">Contact</Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
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
