import React, { useState } from "react";
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
      title: "Project 1",
      imageUrl: "assets/images/tic-tac-toe.png",
      zip: "assets/zips/tic-tac-toe-master.zip",
      site: "https://amitlevi213.github.io/tic-tac-toe/tic-tac-toe.html",
    },
    {
      id: 2,
      title: "Project 2",
      imageUrl: "assets/images/calculator.png",
      zip: "zips/Calculator-master.zip",
      site: "https://amitlevi213.github.io/Calculator/calculator.html",
    },
    {
      id: 3,
      title: "Project 3",
      imageUrl: "assets/images/shopping-cart.png",
      zip: "assets/zips/Shopping-Cart-master.zip",
      site: "https://amitlevi213.github.io/Shopping-Cart/",
    },
    {
      id: 4,
      title: "Project 4",
      imageUrl: "assets/images/page-builder.png",
      zip: "assets/zips/PageBuilder-master.zip",
      site: "https://amitlevi213.github.io/PageBuilder/pageBuilder.html",
    },
    {
      id: 5,
      title: "Project 5",
      imageUrl: "assets/images/credit-card.png",
      zip: "assets/zips/credit-card-master.zip",
      site: "https://amitlevi213.github.io/credit-card/credit-card.html",
    },
    {
      id: 6,
      title: "Project 6",
      imageUrl: "assets/images/memory-game.png",
      zip: "assets/zips/Memory-Game-master.zip",
      site: "https://amitlevi213.github.io/Memory-Game/index.html",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
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
    color: isDark ? "#fff" : "#310047",
    backgroundColor: isDark ? "#310047" : "#d16aff",
    borderRadius: "8px",
    padding: "12px 24px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: isDark ? "#452a4e" : "#a987c4",
    },
  };

  return (
    <Box>
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
                <CardActions>
                  <a
                    href={`/assets/zips/${project.zip}`}
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
          sx={{ color: textColor }}
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
          sx={{ color: textColor }}
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
