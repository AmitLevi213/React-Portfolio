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
} from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";

const Projects = () => {
  const { isDark } = useTheme();
  const projectsData = [
    {
      id: 1,
      title: "Tic-Tac-Toe",
      imageUrl: "assets/images/tic-tac-toe.png",
      zip: "assets/zips/tic-tac-toe-master.zip",
      site: "https://amitlevi213.github.io/tic-tac-toe/tic-tac-toe.html",
    },
    {
      id: 2,
      title: "Calculator",
      imageUrl: "assets/images/calculator.png",
      zip: "zips/Calculator-master.zip",
      site: "https://amitlevi213.github.io/Calculator/calculator.html",
    },
    {
      id: 3,
      title: "Shopping Cart",
      imageUrl: "assets/images/shopping-cart.png",
      zip: "assets/zips/Shopping-Cart-master.zip",
      site: "https://amitlevi213.github.io/Shopping-Cart/",
    },
    {
      id: 4,
      title: "Page Builder",
      imageUrl: "assets/images/page-builder.png",
      zip: "assets/zips/PageBuilder-master.zip",
      site: "https://amitlevi213.github.io/PageBuilder/pageBuilder.html",
    },
    {
      id: 5,
      title: "Credit Card Checker",
      imageUrl: "assets/images/credit-card.png",
      zip: "assets/zips/credit-card-master.zip",
      site: "https://amitlevi213.github.io/credit-card/credit-card.html",
    },
    {
      id: 6,
      title: "Memory Game",
      imageUrl: "assets/images/memory-game.png",
      zip: "assets/zips/Memory-Game-master.zip",
      site: "https://amitlevi213.github.io/Memory-Game/index.html",
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

  const textColor = isDark ? "#d16aff" : "#310047";

  const buttonStyles = {
    color: isDark ? "#d16aff" : "#310047",
    backgroundColor: isDark ? "#310047" : "#d16aff",
    borderRadius: "8px",
    padding: "8px 16px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: isDark ? "#452a4e" : "#a987c4",
    },
  };

  const cardBackground = isDark ? "#5c489a" : "#e0dbff";

  return (
    <Box
      sx={{
        padding: "20px",
        color: textColor,
      }}
    >
      <Grid container spacing={3}>
        {getPageProjects().map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  background: cardBackground,
                  color: isDark ? "#fff" : "#000",
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a
                    href={project.zip}
                    download
                    style={{ ...buttonStyles, textDecoration: "none" }}
                  >
                    Download
                  </a>
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...buttonStyles, textDecoration: "none" }}
                  >
                    Watch
                  </a>
                </CardActions>
              </Card>
            </Slide>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Button
          sx={{ ...buttonStyles, marginRight: "8px" }}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Typography
          variant="body1"
          style={{ margin: "0 16px", color: textColor }}
        >
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          sx={{ ...buttonStyles, marginLeft: "8px" }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
