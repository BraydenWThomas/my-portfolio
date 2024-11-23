import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography} from '@mui/material';

const useStyles = makeStyles({
  containerWrapper: {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    gap: '16px', 
    paddingTop: '15px',  
  },
})

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.containerWrapper}>
      <Container className={classes.bodyContainer}>
      <Typography variant="h3">Contact Me</Typography>
      <Typography variant="subtitle1">Ways to reach out, including email and social media links.</Typography>
      </Container>

      <Container className={classes.contactContainer}>
        <Typography variant="subtitle1">Personal Information:  </Typography>
        <Typography variant="subtitle1">Email: Brayden.William.Thomas@gmail.com</Typography>
        <Typography variant="subtitle1">Mobile: +61 484 339 787</Typography>
        <Typography variant="subtitle1">LinkedIn: linkedin.com/in/brayden-w-thomas</Typography>
        <Typography variant="subtitle1">GitHub: github.com/BraydenWThomas</Typography>
      </Container>

    </div>
  );
}

export default Contact;