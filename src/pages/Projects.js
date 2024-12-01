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
    position: "relative", 
    width: "100%", 
    overflow: "hidden", 
  },
  carouselContent: {
    display: "flex",
    gap: "16px",
    width: "100%", 
  },
  projectCard: {
    flexShrink: 0, 
    flexGrow: 1, 
    minWidth: "0", 
  },
  arrowButton: {
    position: "absolute", 
    top: "50%", 
    transform: "translateY(-50%)", 
    zIndex: 10, 
    backgroundColor: "#808080!important", 
    color: "#fff", 
    borderRadius: "50%", 
    height: "40px", 
    width: "40px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: "0", 
    boxSizing: "border-box", 
  },
  leftArrow: {
    left: "22px", 
  },
  rightArrow: {
    right: "22px", 
  },
  leftArrowIcon: {
    position: "relative", 
    left: "4px", 
  },
  rightArrowIcon: {
    position: "relative", 
    left: "1px", 
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
        {/* Left Arrow Button */}
        <IconButton
          onClick={handlePrevious}
          className={`${classes.arrowButton} ${classes.leftArrow}`}
        >
          <ArrowBackIosIcon className={classes.leftArrowIcon} />
        </IconButton>

        {/* Carousel Content */}
        <Box className={classes.carouselContent}>
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} className={classes.projectCard} />
          ))}
        </Box>

        {/* Right Arrow Button */}
        <IconButton
          onClick={handleNext}
          className={`${classes.arrowButton} ${classes.rightArrow}`}
        >
          <ArrowForwardIosIcon className={classes.rightArrowIcon}/>
        </IconButton>
      </Box>
    </Container>
  );
};

export default Projects;
