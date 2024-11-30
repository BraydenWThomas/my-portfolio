const loadImages = () => {
    const context = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
    const images = {};
    context.keys().forEach((key) => {
      const imageName = key.replace("./", ""); // Remove "./" prefix
      images[imageName] = context(key);
    });
    return images;
  };
  
  export default loadImages;