import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Achievement = ({ title, description, date, direction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element is visible
        } else {
          setIsVisible(false); // Element is out of view
        }
      },
      {
        root: null, 
        rootMargin: '-30% 0% -30% 0%', // Trigger when the element is in the middle 40% of the viewport
        threshold: 0.2, // 20% of the element must be visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        transform: isVisible
          ? 'translateX(0)' 
          : direction === 'left'
          ? 'translateX(-100%)' // Move off-screen to the left
          : 'translateX(100%)', // Move off-screen to the right
        opacity: isVisible ? 1 : 0, 
        transition: 'transform 1.3s ease, opacity 1.3s ease',
        border: '1px solid #58A4B0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#D8DBE2',
        width: '350px', 
        height: '250px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        boxSizing: 'border-box', 
      }}
    >
      <Typography variant="h6" sx={{ color: '#1C1C22', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: '#1C1C22', marginTop: '8px' }}>
        {description}
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', marginTop: '12px', color: '#58A4B0' }}>
        {date}
      </Typography>
    </Box>
  );
};

Achievement.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default Achievement;
