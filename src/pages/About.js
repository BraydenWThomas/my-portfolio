import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button } from '@mui/material';

const useStyles = makeStyles({
  containerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: '85px',
    width: '100%',
    marginTop: '36px',
    flexWrap: 'wrap',  
  },
  bodyContainer: {
    maxWidth: '510px!important',
    paddingRight: '20px',
    minWidth: '395px!important', 
    paddingBottom: '20px'
  },
  rightContainer: {
    maxWidth: '51%!important',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#28272C!important',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '450px!important', 
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
    marginTop: '30px',  
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
  hidden: {
    display: 'none',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    border: '2px solid #58A4B0', 
    borderRadius: '10px',
    marginBottom: '10px', 
    backgroundColor: '#333',  
    alignItems: 'center', 
    gap: '30px', 
  },
  col1: {
    width: '35%',  
    color: '#fff',  
    display: 'flex',
    justifyContent: 'center',  
    alignItems: 'center',  
    textAlign: 'center',  
  },
  col2: {
    width: '62%', 
    color: '#fff',  
    fontSize: '0.75rem', 
    lineHeight: '1.5',   
  },
  aboutSummary: {
    fontSize: '0.85rem',   
    lineHeight: '1.5',     
    color: '#fff',         
    marginBottom: '20px',  
    marginTop: '10px',     
  },
  centeredTitle: {
    textAlign: 'center', 
    marginBottom: '20px!important', 
  },
});




function About() {
  const classes = useStyles();
  const [visibleContainer, setVisibleContainer] = useState('skills'); // Default to skills

  return (
    <div className={classes.containerWrapper}>
      {/* Left Side */}
      <Container className={classes.bodyContainer}>
  <Typography variant="h4" className={classes.centeredTitle}>
    Why hire me?
  </Typography>
  <Typography variant="subtitle1" className={classes.aboutSummary}>
    I'm passionate about learning and growing as a developer. With a background in Electrical Engineering and Computer Science, I thrive in collaborative environments where I can contribute, learn from others, and continually improve my skills.
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
      Key Skills
    </Button>

    <Button
      variant="outlined"
      className={`${classes.aboutButtons} ${
        visibleContainer === 'academic' ? classes.activeButton : ''
      }`}
      onClick={() => setVisibleContainer('academic')}
    >
      Academic Highlights
    </Button>

    <Button
      variant="outlined"
      className={`${classes.aboutButtons} ${
        visibleContainer === 'profession' ? classes.activeButton : ''
      }`}
      onClick={() => setVisibleContainer('profession')}
    >
      Professional Experience
    </Button>
  </div>
</Container>

      {/* Right Side */}
      <Container className={classes.rightContainer}>
        {/* Skills Container */}
        <div className={visibleContainer === 'skills' ? '' : classes.hidden}>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>Programming</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
            Python (Keras, TensorFlow),
  <br />
  Java (Spring, RESTful APIs),
  <br />
  C++ (Algorithm development),
  <br />
  C# (ASP.NET, Database integration),
  <br />
  React (Front-end design).
            </Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>Systems</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
              Unix-based monitoring, real-time troubleshooting, and backend performance optimization.
              Soft Skills: Effective communication, teamwork, rapid learning, and adaptability.
            </Typography>
          </div>
        </div>

        {/* Academic Container */}
        <div className={visibleContainer === 'academic' ? '' : classes.hidden}>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>Academic Highlights</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
              Completed advanced courses such as Foundations of AI for STEM (High Distinction), Image Processing (Credit), and Semiconductor Device Fabrication (Distinction).
            </Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>Capstone Project</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
              Developed a Convolutional Neural Network for Pose Estimation of a Rigid Body.
            </Typography>
          </div>
        </div>

        {/* Professional Container */}
        <div className={visibleContainer === 'profession' ? '' : classes.hidden}>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>System Reliability Engineer at ANZ Bank</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
              Ensured smooth application functioning, automated routine tasks, and provided insights to stakeholders.
            </Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="subtitle1" className={classes.col1}>IT Consultant at FDM</Typography>
            <Typography variant="subtitle1" className={classes.col2}>
              Honed technical skills in Java development, agile management, and group collaboration.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
