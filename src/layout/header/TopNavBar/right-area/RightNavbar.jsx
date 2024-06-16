import React, { useState } from "react";
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = (
    <>
      <Link
        sx={{ textDecoration: "none" }}
        color={isDark ? "#d16aff" : "#310047"}
        href="#"
      >
        Main
      </Link>
      <Link
        sx={{ textDecoration: "none" }}
        color={isDark ? "#d16aff" : "#310047"}
        href="#about"
      >
        About
      </Link>
      <Link
        sx={{ textDecoration: "none" }}
        color={isDark ? "#d16aff" : "#310047"}
        href="#gallery"
      >
        Projects
      </Link>
      <Link
        sx={{ textDecoration: "none" }}
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
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: 250 }} onClick={handleDrawerToggle}>
              <ListItem button>
                <ListItemText>
                  <Link
                    sx={{ textDecoration: "none" }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#"
                  >
                    Main
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link
                    sx={{ textDecoration: "none" }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#about"
                  >
                    About
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link
                    sx={{ textDecoration: "none" }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#gallery"
                  >
                    Projects
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  <Link
                    sx={{ textDecoration: "none" }}
                    color={isDark ? "#d16aff" : "#310047"}
                    href="#contact"
                  >
                    Contact me
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <IconButton sx={{ marginLeft: 1 }} onClick={toggleDarkMode}>
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
