import { Box, useMediaQuery, IconButton } from "@mui/material";
import LogoIcon from "./logo/LogoIcon";
import Logo from "./logo/Logo";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "../../../../providers/DarkThemeProvider";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const LeftNavbar = () => {
  const { isDark } = useTheme();
  const iconColor = isDark ? "#00ADB5" : "white";
  const isMobileOrTablet = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );
  const handleClick = () => {
    const url = "/assets/documents/Amit's CV.pdf";
    window.open(url, "_blank");
  };
  return (
    <Box display="flex" alignItems="center">
      {isMobileOrTablet ? <LogoIcon /> : <Logo />}
      <Box ml="auto" display="flex" alignItems="center">
        <IconButton
          component="a"
          href="https://github.com/AmitLevi213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ color: iconColor }} fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/amit-levi-8752092ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ color: iconColor }} fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="/assets/documents/Amit's CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AssignmentIndIcon sx={{ color: iconColor }} fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LeftNavbar;
