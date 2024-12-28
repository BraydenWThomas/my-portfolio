import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button, Dialog, DialogContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import modules explicitly
import { useTheme, alpha } from "@mui/material/styles";
import loadImages from "../utils/loadImages";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ProjectCard = ({ project }) => {
    const theme = useTheme();
    const [openOverlay, setOpenOverlay] = useState(false);
    const [images, setImages] = useState({});

    // Load images when modal is opened
    const handleImageClick = () => {
        const loadedImages = loadImages(project.folder);
        setImages(loadedImages);
        setOpenOverlay(true);
    };

    const handleCloseOverlay = () => {
        setOpenOverlay(false);
    };

    const firstImage = `1.png`; // First image shown is "1.png"

    return (
        <div>
            <Card
                sx={{
                    maxWidth: 345,
                    minWidth: 345,
                    minHeight: 470,
                    transition: "transform 0.3s",
                    backgroundColor: alpha(theme.palette.background.default, 0.8),
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                        backgroundColor: alpha(theme.palette.background.default, 0.9),
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="180"
                    image={require(`../assets/projects/${project.folder}/${firstImage}`)} // Load first image
                    alt={`${project.name} thumbnail`}
                    onClick={handleImageClick} // Open modal
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
            <Dialog open={openOverlay} onClose={handleCloseOverlay} maxWidth="lg" fullWidth disableScrollLock>
                <DialogContent>
                    <Swiper
                        modules={[Navigation, Pagination]} 
                        spaceBetween={0} 
                        slidesPerView={1} 
                        navigation
                        pagination={{ clickable: true }} 
                    >
                        {Object.keys(images).map((key) => (
                            <SwiperSlide key={key}>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <img
                                        src={images[key]}
                                        alt={`Project Image ${key}`}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProjectCard;
