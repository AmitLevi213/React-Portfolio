import { Box } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";

const Main = () => {
  const { isDark } = useTheme();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: isDark ? "#310047" : "#d16aff",
        }}
      ></Box>
    </>
  );
};
export default Main;
