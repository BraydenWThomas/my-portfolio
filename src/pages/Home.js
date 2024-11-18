import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Define styles using makeStyles
const useStyles = makeStyles({
  containerWrapper: {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    gap: '16px', 
  },
  bodyContainer: {
    backgroundColor: 'blue',
    padding: '16px',
    width: '560px',

  },
  pictureContainer: {
    backgroundColor: 'green',
    padding: '16px',
    flex: '1 1 30%', 
    minWidth: '30%', 
  },
  experienceBarContainer: {
    display: 'flex',
    justifyContent: "space-between", 
    alignItems: 'center', 
    backgroundColor: 'red', 
    padding: '16px',
    width: '100%', 
  },
  buttonBar:{
    display: 'flex', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    backgroundColor: 'red', 
    padding: '16px',
    width: '100%', 
  },
  experienceBarModule:{
    display: 'flex',
    flexDirection: 'column', // Stack elements (number and text) vertically
    alignItems: 'center', // Center align the text and number
    width: '220px',
    backgroundColor: 'green',
    padding: '8px', // Padding around the module
    gap: '8px', // Space between number and text
    textAlign: 'center', // Center text for wrapping
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.containerWrapper}>
      {/* Body Container */}
      <Container className={classes.bodyContainer}>
        <Typography>Software Engineer</Typography>
        <Typography variant="h2">Hello I'm</Typography>
        <Typography variant="h2">Brayden Thomas</Typography>
        <Typography>
          Small summary about me and my work. Small summary about me and my work. Small summary about me and my
          work. Small summary about me and my work.
        </Typography>
        {/* Button Bar Container */}
        <Container className={classes.buttonBar}>
          <button>Download CV</button>
          <button>LinkedIn</button>
          <button>GitHub</button>
        </Container>
      </Container>

      {/* Picture Container */}
      <Container className={classes.pictureContainer}>
        <Typography>
          Small summary about me and my work. Small summary about me and my work. Small summary about me and my
          work. Small summary about me and my work.
        </Typography>
        <Typography>
          Small summary about me and my work. Small summary about me and my work. Small summary about me and my
          work. Small summary about me and my work.
        </Typography>
      </Container>

      {/* Experience Bar Container */}
      <Container className={classes.experienceBarContainer}>
        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 3 </Typography>
          <Typography variant='h7'> Years Experience </Typography>
        </Container>

        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 42 </Typography>
          <Typography variant='h7'> Projects Completed </Typography>
        </Container>

        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 155 </Typography>
          <Typography variant='h7'> Technologies Mastered </Typography>
        </Container>

        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 141 </Typography>
          <Typography variant='h7'> Code Commits </Typography>
        </Container>
      </Container>

    </div>
  );
}

export default Home;