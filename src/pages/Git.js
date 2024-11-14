import React from 'react';
import { useEffect } from 'react';

function Git() {

    useEffect(() => {
        
        fetch("https://api.github.com/repos/BraydenWThomas/my-portfolio/branches")
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.log(error);
            }
        )   
    }, []);



  return (
    <div>
      <h1>Git Viewer</h1>
      <p>Show Git Project</p>
    </div>
  );
}

export default Git;