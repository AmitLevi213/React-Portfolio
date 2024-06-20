import { Box } from "@mui/material";
import StarBackground from "./StarBackground";
import { useTheme } from "../../providers/DarkThemeProvider"; // Assuming useTheme provides isDark

const Main = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <>
      <StarBackground isDark={isDark} />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundColor: "transparent",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Main;
