const loadImages = (folder) => {
  const context = require.context("../assets/projects", true, /\.(png|jpe?g|svg)$/);
  const images = context.keys()
      .filter((key) => key.startsWith(`./${folder}/`)) // Filter for the specific folder
      .reduce((acc, key) => {
          const imageName = key.replace(`./${folder}/`, ""); // Extract the image name
          acc[imageName] = context(key); // Map the image name to the imported image
          return acc;
      }, {});
  return images;
};

export default loadImages;
