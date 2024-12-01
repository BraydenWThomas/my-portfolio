import loadImages from "../utils/loadImages";

const images = loadImages();

export const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      techStack: ["React", "Material UI"],
      link: "https://github.com/BraydenWThomas/my-portfolio",
      image: images["PortfolioWebsiteThumb.png"],
    },
    {
      id: 2,
      name: "Clinic Connect",
      description: "Clinic Connect links clinics and clients with an easy-to-use platform for booking and managing appointments.",
      techStack: ["C#", "ASP.NET", "MySQL"],
      link: "https://github.com/BraydenWThomas/clinic-connect",
      image: images["ClinicConnect.png"],
    },
    {
      id: 3,
      name: "Profit Creatornator",
      description: "ProfitCreatorNator streamlines stock and futures trading with tools for trend analysis, price history, and portfolio management.",
      techStack: ["React", "Java", "Material UI", "NodeJS", "MySQL"],
      link: "https://github.com/BraydenWThomas/ProfitCreatorNator",
      image: images["ProfitCreatornator.png"],
    },
    {
      id: 4,
      name: "Recruitinator",
      description: "Recruitinator simplifies hiring by streamlining interviews and helping companies efficiently find top talent.",
      techStack: ["React", "Java", "NodeJS", "MySQL"],
      link: "https://github.com/BraydenWThomas/creekinator",
      image: images["Recruitinator.png"],
    },
    {
      id: 5,
      name: "Rentex",
      description: "Rentex helps users find rentals, manage properties, and handle payments seamlessly.",
      techStack: ["React", "Java", "NodeJS", "MongoDB", "Google Cloud"],
      link: "https://github.com/BraydenWThomas/RentalApp",
      image: images["Rentex.png"],
    },
  ];