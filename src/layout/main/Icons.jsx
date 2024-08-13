import { IoLogoFirebase } from "react-icons/io5";
import { FaSass, FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { DiJavascript, DiNodejs, DiMysql, DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import "./icons.css";
import { Box } from "@mui/material";

const iconStyles = {
  fontSize: "3rem", // Increased size for better visibility
};

const Icons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around", // Changed to 'space-around' for better alignment
        flexWrap: "wrap",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <IoLogoFirebase className="icon" color="#FFCA28" style={iconStyles} />
      <FaSass className="icon" color="magenta" style={iconStyles} />
      <DiJavascript className="icon" color="#F7DF1E" style={iconStyles} />
      <FaHtml5 className="icon" color="#E34F26" style={iconStyles} />
      <FaCss3 className="icon" color="#1572B6" style={iconStyles} />
      <SiTypescript className="icon" color="#3178C6" style={iconStyles} />
      <FaReact className="icon" color="#61DAFB" style={iconStyles} />
      <DiNodejs className="icon" color="#37e615" style={iconStyles} />
      <FaBootstrap className="icon" color="#7952B3" style={iconStyles} />
      <DiMysql className="icon" color="aqua" style={iconStyles} />
      <DiMongodb className="icon" color="#47A248" style={iconStyles} />
    </Box>
  );
};

export default Icons;
