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
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '-30% 0% -30% 0%',
        threshold: 0.2,
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
    <Box sx={{ 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
    }}>
      {/* Pole */}
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '2px',
          backgroundColor: '#58A4B0',
          zIndex: 1,
          left: '50%',
          transform: 'translateX(-50%)',
          
        }}
      >
        {/* Date */}
        <Typography
          variant="caption"
          sx={{
            width: '110px',
            height: '40px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFF',
            padding: '2px 4px',
            borderRadius: '4px',
            color: '#58A4B0',
            fontWeight: 'bold',
            zIndex: 3,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 950px)': {
            transform: 'translate(-50%) translateY(-60px)', 
          },
          }}
        >
          {date}
        </Typography>
      </Box>
    
      {/* Achievement */}
      <Box
        ref={ref}
        sx={{
          transform: isVisible
            ? direction === 'left'
              ? 'translateX(calc(-50% - 80px))' // Stop slightly left of the pole
              : 'translateX(calc(50% + 80px))' // Stop slightly right of the pole
            : direction === 'left'
            ? 'translateX(-100%)'
            : 'translateX(100%)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 1.3s ease, opacity 1.3s ease',
          border: '1px solid #58A4B0',
          borderRadius: '8px',
          padding: '16px',
          marginTop: '60px',
          marginBottom: '60px',
          backgroundColor: '#D8DBE2',
          width: "350px",
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 0,
          '@media (max-width: 950px)': {
            left: '50%',
            transform: 'translateX(-50%) translateY(200px)',
            marginTop: '0px',
            marginBottom: '200px',
            zIndex: 2,
          },
        }}
      >
        <Typography variant="h6" sx={{ color: '#1C1C22', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#1C1C22', marginTop: '8px' }}>
          {description}
        </Typography>
      </Box>
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
