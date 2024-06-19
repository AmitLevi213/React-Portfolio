import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider"; // Assuming useTheme provides isDark

const CV = () => {
  const { isDark } = useTheme();

  const buttonStyles = {
    color: isDark ? "#d16aff" : "#310047",
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
    fontFamily: "Montserrat, sans-serif",
  };

  const handleClick = () => {
    const url = "/assets/documents/Amit's CV.pdf";
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
        marginBottom: "24px",
      }}
    >
      <Button sx={buttonStyles} onClick={handleClick}>
        Watch CV
      </Button>
    </Box>
  );
};

export default CV;
