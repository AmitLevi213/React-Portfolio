import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "../../../providers/DarkThemeProvider";
import LeftNavbar from "./left-area/LeftNavbar";
import RightNavbar from "./right-area/RightNavbar";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <AppBar position="">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: isDark ? "#222831" : "#00ADB5",
        }}
      >
        <LeftNavbar />
        <RightNavbar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
