import React from 'react';
import { Container, Typography, Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/FileDownload';
import achievementsData from '../data/achievementsData'; 
import Achievement from '../components/Achievement'; 

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
    paddingTop: '85px',  
  },
  bodyContainer: {
    // backgroundColor: 'blue',
    padding: '16px',
    width: '560px !important',
    paddingTop: '50px',

  },
  pictureContainer: {
    //  backgroundColor: 'green',
    padding: '16px',
    flex: '1 1 30%', 
    minWidth: '35%', 
    maxWidth: '450px!important',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotatingBorder: {
    position: 'absolute',

    width: '99%',
    height: '99%',
    border: '6px dashed #58A4B0', 
    borderRadius: '50%', 
    animation: '$rotate 80s linear infinite',
    transformOrigin: 'center', 
    pointerEvents: 'none', 
    boxSizing: 'border-box', 
  },
  picture: {
    width: '100%',
    height: '100%',
    borderRadius: '50%', 
    objectFit: 'cover', 
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  experienceBarContainer: {
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: "space-between", 
    alignItems: 'center',  
     paddingTop: '16px',
    width: '100%', 
  },
 
  buttonBar:{
    // backgroundColor: '#1c1c22', 
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
    borderRadius: '50px !important' 
  },

  experienceBarModule:{
    // backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '220px',
    padding: '8px', 
    gap: '8px', 
    textAlign: 'center', 
  },

  animatedHistory: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '32px',
    overflow: 'hidden',
    paddingTop: '64px',
    paddingBottom: '64px',
  },
  

});

function Home() {
  const classes = useStyles();


  return (
    <div className={classes.containerWrapper}>
      {/* Body Container */}
      <Container className={classes.bodyContainer}>
        <Typography>Software Engineer</Typography>
        <Typography variant="h2" paddingTop={"3px"}>Hello I'm</Typography>
        <Typography variant="h2" color='#58A4B0'>Brayden Thomas</Typography>
        <Typography variant="subtitle1" paddingTop={"15px"} paddingBottom={"30px"}>
        Electrical Engineering graduate with a focus on Computer Science. Skilled in solving complex problems and optimizing system performance through automation.
        </Typography>
        {/* Button Bar Container */}
        <Container className={classes.buttonBar}>
          <Button variant="outlined" className={classes.cvButton}
          endIcon={<DownloadIcon />}
          onClick={() => {
            const link = document.createElement('a');
            link.href = require('../assets/BraydenThomasCV.pdf'); // File Path
            link.download = 'BraydenThomasCV.pdf'; // File Name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>Download CV</Button>
          {/* Linked In */}
          <IconButton onClick={() => window.open("https://www.linkedin.com/in/brayden-w-thomas/", "_blank")}>
            <img alt="LinkedIn" src={require('../assets/home/linkedinLogo.png')} style={{ width: '18px', height: '18px' }} />
          </IconButton>
          {/* GitHub */}
          <IconButton onClick={() => window.open("https://github.com/BraydenWThomas", "_blank")}>
            <img alt="GitHub" src={require('../assets/home/githubLogo.png')} style={{ width: '18px', height: '18px'}} />
          </IconButton>

        </Container>
      </Container>

      {/* Picture Container */}
      <Container className={classes.pictureContainer}>
        {/* Rotating dashed border */}
        <div className={classes.rotatingBorder}></div>

        {/* Stationary image */}
        <Box
          component="img"
          src={require('../assets/home/profilePicture.png')} 
          alt="Profile Picture"
          className={classes.picture}
        />
      </Container>

      {/* Experience Bar Container */}
      <Container className={classes.experienceBarContainer}>
        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 3 </Typography>
          <Typography variant='h7'> Years Experience </Typography>
        </Container>

        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 5 </Typography>
          <Typography variant='h7'> Projects Completed </Typography>
        </Container>

        <Container className={classes.experienceBarModule}>
          <Typography variant='h4'> 3 </Typography>
          <Typography variant='h7'> Technologies Mastered </Typography>
        </Container>
      </Container>


      {/* Animated History */}
      <Container className={classes.animatedHistory}>
      <Typography variant='h3' style={{paddingBottom:"64px"}}> Experience </Typography>
        {achievementsData.map((achievement, index) => (
          <Achievement 
            key={achievement.id} 
            title={achievement.title} 
            description={achievement.description} 
            date={achievement.date} 
            direction={index % 2 === 0 ? 'left' : 'right'} // Alternate directions
          />
        ))}
      </Container>


    </div>
  );
}

export default Home;