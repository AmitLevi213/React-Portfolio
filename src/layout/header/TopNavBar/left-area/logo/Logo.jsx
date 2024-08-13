import { Typography } from "@mui/material";
import { useTheme } from "../../../../../providers/DarkThemeProvider";

const Logo = () => {
  const { isDark } = useTheme();

  return (
    <Typography
      variant="h5"
      color={isDark ? "#00ADB5" : "white"}
      sx={{
        display: { xs: "none", md: "inline-flex" },
        marginRight: 2,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      Amit Levi
    </Typography>
  );
};

export default Logo;
