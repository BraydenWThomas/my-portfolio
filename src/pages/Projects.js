import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Container, Typography, Grid2, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    marginTop: "106px", 
    marginBottom: "36px",
  },
  gridContainer: {
    marginTop: "16px",
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
  },
});

const Projects = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.contentWrapper}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid2 container spacing={3} className={classes.gridContainer}>
          {projects.map((project) => (
            <Grid2 item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard project={project} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Container>
  );
};

export default Projects;
