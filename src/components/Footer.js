import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#1c1c22', // Match the theme background
    color: '#D8DBE2',
    padding: theme.spacing(4, 0),
    marginTop: 'auto', // Ensures the footer sticks to the bottom of the page
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
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} Brayden. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
