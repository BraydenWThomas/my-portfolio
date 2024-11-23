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


function About() {
  const classes = useStyles();
  return (
    <div className={classes.containerWrapper}>
      <Container className={classes.bodyContainer}>
      <Typography variant="h3">About Me</Typography>
      <Typography variant="subtitle1">Information about my background, skills, and experience.</Typography>
      </Container>

      <Container className={classes.skilsContainer}>
        <Typography variant="subtitle1">Key Skills:  </Typography>
        <Typography variant="subtitle1">
          Programming: Python (Keras, TensorFlow), Java (Spring, RESTful APIs), C++ (Algorithm development), C# (ASP.NET, Database integration), React (Front-end design).
        </Typography>
        <Typography variant="subtitle1">
          Systems: Unix-based monitoring, real-time troubleshooting, and backend performance optimization.
        </Typography>
        <Typography variant="subtitle1">
          Soft Skills: Effective communication, teamwork, rapid learning, and adaptability.
        </Typography>
      </Container>

      <Container className={classes.academicContainer}>
        <Typography variant="subtitle1">Academic Highlights: </Typography>
        <Typography variant="subtitle1">
          Completed advanced courses such as Foundations of AI for STEM (High Distinction), Image Processing (Credit), and Semiconductor Device Fabrication (Distinction).
        </Typography>
        <Typography variant="subtitle1">
          Capstone project: Developed a Convolutional Neural Network for Pose Estimation of a Rigid Body.
        </Typography>
      </Container>

      <Container className={classes.professionContainer}>
        <Typography variant="subtitle1">Professional Experience: </Typography>
        <Typography variant="subtitle1">
          System Reliability Engineer at ANZ Bank - Ensured smooth application functioning, automated routine tasks, and provided insights to stakeholders.</Typography>
        <Typography variant="subtitle1">
          IT Consultant at FDM - Honed technical skills in Java development, agile management, and group collaboration.
        </Typography>
      </Container>


    </div>
  );
}

export default About;