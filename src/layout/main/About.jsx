import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";
import Divider from "@mui/material/Divider";
import "./about.css";

const About = () => {
  const { isDark } = useTheme();

  return (
    <Container
      id="about"
      sx={{ py: 5, display: "flex", justifyContent: "space-between" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="/assets/images/amit-about-photo.png"
          alt="about me"
          sx={{
            width: "100%",
            maxWidth: 300,
            height: "auto",
            borderRadius: "30%",
            mb: 4,
          }}
        />
        <Divider sx={{ m: "35px" }} className="divider" />
        <Typography
          className="paragraph"
          variant="body1"
          component="p"
          sx={{
            maxWidth: 600,
            color: isDark ? "#00ADB5" : "#222831",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          I'm a web developer with a knack for innovation and a solid foundation
          in JavaScript, HTML5/CSS, Node.js, React.js, SQL/NoSQL, RESTful APIs,
          Git/GitHub, TypeScript, and Firebase. Self-driven and diligent, I
          thrive in collaborative environments where creative thinking and good
          communication lead to standout results. My sociable nature and unique
          perspective help me tackle problems from different angles,
          consistently delivering innovative solutions. With a proven ability to
          think outside the box and a dedication to continuous improvement, my
          journey in web development is all about excellence and a genuine love
          for technology. Ready to bring fresh ideas and a dynamic approach to
          any team, I'm eager to contribute to impactful projects and grow
          within the industry.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
