import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';

const useStyles = makeStyles({
  containerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '15px',
    width: '100%',
  },
  bodyContainer: {
    width: '45%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '15px',
    alignItems: 'center',
  },
  aboutButtons: {
    width: '100%',
    padding: '12px',
    borderRadius: '50px',
    border: '2px solid #58A4B0!Important',
    color: '#81B0C0!Important',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#58A4B0',
      color: '#fff!Important',
    },
  },
  activeButton: {
    backgroundColor: '#58A4B0!Important',
    color: '#fff!Important',
  },
  rightContainer: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
  },
  hidden: {
    display: 'none',
  },
});

function About() {
  const classes = useStyles();
  const [visibleContainer, setVisibleContainer] = useState('skills'); // Default to skills

  return (
    <div className={classes.containerWrapper}>
      {/* Left Side */}
      <Container className={classes.bodyContainer}>
        <Typography variant="h4">Why hire me?</Typography>
        <Typography variant="subtitle1">
          Details about me, some small summary maybe.
        </Typography>

        <div className={classes.buttonContainer}>
          {/* Buttons with dynamic class application */}
          <Button
            variant="outlined"
            className={`${classes.aboutButtons} ${
              visibleContainer === 'skills' ? classes.activeButton : ''
            }`}
            onClick={() => setVisibleContainer('skills')}
          >
            Button 1
          </Button>
          <Button
            variant="outlined"
            className={`${classes.aboutButtons} ${
              visibleContainer === 'academic' ? classes.activeButton : ''
            }`}
            onClick={() => setVisibleContainer('academic')}
          >
            Button 2
          </Button>
          <Button
            variant="outlined"
            className={`${classes.aboutButtons} ${
              visibleContainer === 'profession' ? classes.activeButton : ''
            }`}
            onClick={() => setVisibleContainer('profession')}
          >
            Button 3
          </Button>
        </div>
      </Container>

      {/* Right Side */}
      <Container className={classes.rightContainer}>
        {/* Skills Container */}
        <div className={visibleContainer === 'skills' ? '' : classes.hidden}>
          <Typography variant="subtitle1">Key Skills: </Typography>
          <Typography variant="subtitle1">
            Programming: Python (Keras, TensorFlow), Java (Spring, RESTful APIs), C++ (Algorithm development), C# (ASP.NET, Database integration), React (Front-end design).
          </Typography>
          <Typography variant="subtitle1">
            Systems: Unix-based monitoring, real-time troubleshooting, and backend performance optimization.
          </Typography>
          <Typography variant="subtitle1">
            Soft Skills: Effective communication, teamwork, rapid learning, and adaptability.
          </Typography>
        </div>

        {/* Academic Container */}
        <div className={visibleContainer === 'academic' ? '' : classes.hidden}>
          <Typography variant="subtitle1">Academic Highlights: </Typography>
          <Typography variant="subtitle1">
            Completed advanced courses such as Foundations of AI for STEM (High Distinction), Image Processing (Credit), and Semiconductor Device Fabrication (Distinction).
          </Typography>
          <Typography variant="subtitle1">
            Capstone project: Developed a Convolutional Neural Network for Pose Estimation of a Rigid Body.
          </Typography>
        </div>

        {/* Professional Container */}
        <div
          className={visibleContainer === 'profession' ? '' : classes.hidden}
        >
          <Typography variant="subtitle1">Professional Experience: </Typography>
          <Typography variant="subtitle1">
            System Reliability Engineer at ANZ Bank - Ensured smooth application functioning, automated routine tasks, and provided insights to stakeholders.
          </Typography>
          <Typography variant="subtitle1">
            IT Consultant at FDM - Honed technical skills in Java development, agile management, and group collaboration.
          </Typography>
        </div>
      </Container>
    </div>
  );
}

export default About;
