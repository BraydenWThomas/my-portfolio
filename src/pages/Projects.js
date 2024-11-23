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

function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.containerWrapper}>
      <Container className={classes.bodyContainer}>
      <Typography variant="h3">My Projects</Typography>
      <Typography variant="subtitle1">A showcase of my previous projects</Typography>
      </Container>
    </div>
  );
}

export default Projects;