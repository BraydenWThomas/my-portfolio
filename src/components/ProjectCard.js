import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, Dialog, DialogContent } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme, alpha } from "@mui/material/styles";

const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const [openOverlay, setOpenOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    setSelectedImage(project.image); // Set the selected image to the clicked image
    setOpenOverlay(true); // Open the overlay
  };

  const handleCloseOverlay = () => {
    setOpenOverlay(false); // Close the overlay
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          minHeight: 470,
          transition: "transform 0.3s",
          backgroundColor: alpha(theme.palette.background.default, 8),
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: alpha(theme.palette.background.default, 9),
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={project.image}
          alt={`${project.name} thumbnail`}
          onClick={handleImageClick} // Handle the click event to open the overlay
          sx={{ cursor: "pointer" }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom color="#D8DBE2">
            {project.name}
          </Typography>
          <Typography variant="body2" color="#ADAFB5">
            {project.description}
          </Typography>
          <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {project.techStack.map((tech, index) => (
              <Chip key={index} label={tech} size="small" color="primary" />
            ))}
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            href={project.link}
            target="_blank"
          >
            View Project
          </Button>
        </CardContent>
      </Card>

      {/* Full-Size Image Overlay */}
      <Dialog open={openOverlay} onClose={handleCloseOverlay} maxWidth="lg" fullWidth>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={selectedImage}
              alt="Full-size project"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ProjectCard;
