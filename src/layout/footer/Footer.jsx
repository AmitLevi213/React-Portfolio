import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const { isDark } = useTheme();
  const iconColor = isDark ? "#d16aff" : "#310047";
  const labelColor = isDark ? "#d16aff" : "#310047";

  return (
    <Paper
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5)",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{
          background: isDark ? "#310047" : "#d16aff",
        }}
      >
        <BottomNavigationAction
          label="0546879014"
          icon={<ContactPhoneIcon sx={{ color: iconColor }} />}
          sx={{ color: labelColor, fontFamily: "Montserrat, sans-serif" }}
        />
        <BottomNavigationAction
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/amit-levi-8752092ba/",
              "_blank"
            )
          }
          label="Linkedin"
          icon={<LinkedInIcon sx={{ color: iconColor }} />}
          sx={{ color: labelColor, fontFamily: "Montserrat, sans-serif" }}
        />
        <BottomNavigationAction
          label="amitandta@gmail.com"
          icon={<EmailIcon sx={{ color: iconColor }} />}
          sx={{ color: labelColor, fontFamily: "Montserrat, sans-serif" }}
        />
        <BottomNavigationAction
          label="Gan Yavne,IL"
          icon={<LocationOnIcon sx={{ color: iconColor }} />}
          sx={{ color: labelColor, fontFamily: "Montserrat, sans-serif" }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
