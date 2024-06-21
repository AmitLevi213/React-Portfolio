import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useTheme } from "../../../../providers/DarkThemeProvider";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useMediaQuery from "@mui/material/useMediaQuery";

const preventDefault = (event) => event.preventDefault();

const RightNavbar = () => {
  const { isDark, toggleDarkMode } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const handleDrawerToggle = (sectionId) => {
    setDrawerOpen(false); // Close the drawer first
    scrollToSection(sectionId); // Scroll to the section
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = (
    <>
      <Link
        sx={{ textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
        onClick={() => handleDrawerToggle("about")}
        color={isDark ? "#d16aff" : "#310047"}
        href="#about"
      >
        About
      </Link>
      <Link
        sx={{ textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
        onClick={() => handleDrawerToggle("projects")}
        color={isDark ? "#d16aff" : "#310047"}
        href="#projects"
      >
        Projects
      </Link>
      <Link
        sx={{ textDecoration: "none", fontFamily: "Montserrat, sans-serif" }}
        onClick={() => handleDrawerToggle("contact")}
        color={isDark ? "#d16aff" : "#310047"}
        href="#contact"
      >
        Contact me
      </Link>
      <IconButton onClick={toggleDarkMode}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );

  return (
    <Box
      sx={{
        typography: "body2",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {isMobileOrTablet ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => handleDrawerToggle("about")}>
                <ListItemText>
                  <Link
                    sx={{
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#about"
                  >
                    About
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => handleDrawerToggle("projects")}>
                <ListItemText>
                  <Link
                    sx={{
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#projects"
                  >
                    Projects
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => handleDrawerToggle("contact")}>
                <ListItemText>
                  <Link
                    sx={{
                      textDecoration: "none",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#contact"
                  >
                    Contact me
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <IconButton onClick={toggleDarkMode}>
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        menuItems
      )}
    </Box>
  );
};

export default RightNavbar;
