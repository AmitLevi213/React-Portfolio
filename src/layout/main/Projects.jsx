import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Slide,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Projects = () => {
  const { isDark } = useTheme();
  const projectsData = [
    {
      id: 1,
      title: "Tic-Tac-Toe",
      description: "a simple Tic-Tac-Toe game, made by HTML5,CSS,JS",
      imageUrl: "assets/images/tic-tac-toe.png",
      zip: "assets/zips/tic-tac-toe-master.zip",
      site: "https://amitlevi213.github.io/tic-tac-toe/tic-tac-toe.html",
    },
    {
      id: 2,
      title: "Calculator",
      description: "a simple Calculator, made by HTML5,CSS,JS",
      imageUrl: "assets/images/calculator.png",
      zip: "zips/Calculator-master.zip",
      site: "https://amitlevi213.github.io/Calculator/calculator.html",
    },
    {
      id: 3,
      title: "Shopping Cart",
      imageUrl: "assets/images/shopping-cart.png",
      description: "a Shopping Cart, made by HTML5,CSS,JS",
      zip: "assets/zips/Shopping-Cart-master.zip",
      site: "https://amitlevi213.github.io/Shopping-Cart/",
    },
    {
      id: 4,
      title: "Page Builder",
      imageUrl: "assets/images/page-builder.png",
      description: "a Page Builder, made by HTML5,CSS,JS",
      zip: "assets/zips/PageBuilder-master.zip",
      site: "https://amitlevi213.github.io/PageBuilder/pageBuilder.html",
    },
    {
      id: 5,
      title: "Credit Card Checker",
      description:
        "a Credit Card Checker(Visa,MasterCard,American Express,Discover, Diners Club), made by HTML5,CSS,JS",
      imageUrl: "assets/images/credit-card.png",
      zip: "assets/zips/credit-card-master.zip",
      site: "https://amitlevi213.github.io/credit-card/credit-card.html",
    },
    {
      id: 6,
      title: "Memory Game",
      description: "a simple Memory Game(with emojis), made by HTML5,CSS,JS",
      imageUrl: "assets/images/memory-game.png",
      zip: "assets/zips/Memory-Game-master.zip",
      site: "https://amitlevi213.github.io/Memory-Game/index.html",
    },
    {
      id: 7,
      title: "Card Concierge",
      description:
        "A dynamic React MUI app showcasing your business offerings through visually appealing and interactive cards for an engaging customer experience.",
      imageUrl: "",
      zip: "",
      site: "",
    },
    {
      id: 7,
      title: "Soundscape Central",
      description:
        "SoundScape Central is an innovative platform designed to elevate your music presence by offering a dynamic and immersive experience for both creators and enthusiasts",
      imageUrl: "",
      zip: "",
      site: "",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 === 0 ? totalPages : prevPage - 1
    );
  };

  const getPageProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projectsData.slice(startIndex, endIndex);
  };

  const buttonStyles = {
    color: isDark ? "#d16aff" : "#310047",
    backgroundColor: isDark ? "#310047" : "#d16aff",
    borderRadius: "20px",
    padding: "8px 16px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: isDark ? "#452a4e" : "#a987c4",
    },
    fontFamily: "Montserrat, sans-serif",
  };
  const iconColors = isDark ? "#222831" : "#00ADB5";
  const textColor = isDark ? "#00ADB5" : "white";
  const cardBackground = isDark ? "#5c489a" : "#e0dbff";
  const fontStyle = {
    fontFamily: "Montserrat, sans-serif",
  };

  return (
    <Box
      id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "10px", sm: "20px" },
        color: textColor,
        backgroundColor: isDark ? "#ADB5BD" : "#6C757D",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "center", mt: 2, pb: 2, ...fontStyle }}
      >
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {getPageProjects().map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  background: cardBackground,
                  color: isDark ? "#fff" : "#000",
                  borderRadius: "16px",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
                <CardContent>
                  <Typography
                    sx={{ ...fontStyle, color: textColor }}
                    variant="h5"
                    component="div"
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{ ...fontStyle, color: textColor, mt: 1 }}
                    variant="body2"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  {project.zip && (
                    <a
                      href={project.zip}
                      download
                      style={{ ...buttonStyles, textDecoration: "none" }}
                    >
                      Download
                    </a>
                  )}
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...buttonStyles, textDecoration: "none" }}
                    >
                      Watch
                    </a>
                  )}
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <IconButton
          aria-label="previous page"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          sx={{ color: iconColors }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          aria-label="next page"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          sx={{ color: iconColors }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Projects;
