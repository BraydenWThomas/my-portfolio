import React, { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Container, Typography, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const useStyles = makeStyles({
  carouselWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  },
  carouselContent: {
    display: "flex",
    gap: "16px",
    overflow: "hidden",
  },
});

const Projects = () => {
  const classes = useStyles();
  const visibleCount = 3; // Number of projects to display at a time
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const visibleProjects = [
    ...projects.slice(startIndex, startIndex + visibleCount),
    ...projects.slice(0, Math.max(0, startIndex + visibleCount - projects.length)),
  ].slice(0, visibleCount);

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Box className={classes.carouselWrapper}>
        <IconButton onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButton>
        <Box className={classes.carouselContent}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Projects;
