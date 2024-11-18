import React from 'react';
import { Typography } from '@mui/material';
import "../styles/Home.css";

function Home() {

  return (
    <div>

      <Typography  >
        Software Engineer
      </Typography>
      <Typography  
      variant='h1'>
        Hello I'm
      </Typography>
      <Typography  >
        Brayden Thomas
      </Typography>
      <Typography  >
        Small summary about me and my work
      </Typography>

      {/* <div className='body'>Test</div>
      <div className='image'>Test</div>
      <div className='links'>Test</div>
      <div className='overview'>Test</div> */}


      <h1>Welcome to My Portfolio</h1>
      <p>Get to know more about me and my work!</p>
    </div>
  );
}

export default Home;