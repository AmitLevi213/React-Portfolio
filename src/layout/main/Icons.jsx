import { IoLogoFirebase } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { Box } from "@mui/material";

const iconStyles = {
  fontSize: "5rem",
  margin: "1rem",
};

const Icons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <IoLogoFirebase color="#FFCA28" style={iconStyles} />
      <FaSass color="magenta" style={iconStyles} />
      <DiJavascript color="#F7DF1E" style={iconStyles} />
      <FaHtml5 color="#E34F26" style={iconStyles} />
      <FaCss3 color="#1572B6" style={iconStyles} />
      <SiTypescript color="#3178C6" style={iconStyles} />
      <FaReact color="#61DAFB" style={iconStyles} />
      <DiNodejs color="#37e615" style={iconStyles} />
      <FaBootstrap color="#7952B3" style={iconStyles} />
      <DiMysql color="black" style={iconStyles} />
      <DiMongodb color="#47A248" style={iconStyles} />
    </Box>
  );
};

export default Icons;
