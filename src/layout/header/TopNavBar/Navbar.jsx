import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "../../../providers/DarkThemeProvider";
import LeftNavbar from "./left-area/LeftNavbar";
import RightNavbar from "./right-area/RightNavbar";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: isDark ? "#310047" : "#d16aff",
        }}
      >
        <LeftNavbar />
        <RightNavbar />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
