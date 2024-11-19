import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';

// #1C1C22
// #D8DBE2
// #A9BCD0
// #58A4B0
// #81B0C0


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
    width: '560px !important',

  },
  pictureContainer: {
    backgroundColor: 'green',
    padding: '16px',
    flex: '1 1 30%', 
    minWidth: '30%', 
  },
  experienceBarContainer: {
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: "space-between", 
    alignItems: 'center',  
    padding: '16px',
    width: '100%', 
  },
 
  buttonBar:{
    backgroundColor: '#1c1c22', 
    display: 'flex', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    padding: '16px',
    width: '100%',
    '& button': {
      color: '#81B0C0',
      border: '2px solid #58A4B0',
      borderRadius: '50%', 
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#58A4B0',
        color: '#fff',
      },
    },
  },
  
  cvButton: {
    borderRadius: '50px !important', 
  },

  experienceBarModule:{
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '220px',
    padding: '8px', 
    gap: '8px', 
    textAlign: 'center', 
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
        <Typography variant="h2" color='#58A4B0'>Brayden Thomas</Typography>
        <Typography>
          Small summary about me and my work. Small summary about me and my work. Small summary about me and my
          work. Small summary about me and my work.
        </Typography>
        {/* Button Bar Container */}
        <Container className={classes.buttonBar}>
          <Button variant="outlined" className={classes.cvButton}>Download CV</Button>
          {/* Linked In */}
          <Button variant="outlined">O</Button> 
          {/* GitHub */}
          <Button variant="outlined">O</Button>


        </Container>
      </Container>

      {/* Picture Container */}
      <Container className={classes.pictureContainer}>
      <Box
        component="img"
        src={require('../assets/temp_image.jpg')}
        sx={{
          width: '100%',
          height: '100%',}}
  />
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