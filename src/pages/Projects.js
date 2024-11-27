// src/pages/Projects.jsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Grid, Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
