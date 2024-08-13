import { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useTheme } from "../../providers/DarkThemeProvider";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8o1x9yp",
        "template_m3bknor",
        e.target,
        "cFFxRQyqpdzS7q4xB"
      )
      .then((result) =>
        alert(
          result.status === 200
            ? "Success! Your message has been sent."
            : "Error sending message. Please try again later."
        )
      )
      .catch(() =>
        alert(
          "There was an error sending your message. Please try again later."
        )
      );
    setForm({ fullname: "", email: "", phone: "", message: "" });
  };

  const fontStyle = {
    fontFamily: "Montserrat, sans-serif",
  };

  const textFieldStyles = {
    ...fontStyle,
    "& .MuiInputBase-root": {
      color: isDark ? "#e3f2fd" : "#1a0033",
    },
    "& .MuiInputLabel-root": {
      color: isDark ? "#e3f2fd" : "#1a0033",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: isDark ? "#e3f2fd" : "#1a0033",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: isDark ? "#e3f2fd" : "#1a0033",
    },
  };

  const buttonStyles = {
    ...fontStyle,
    color: isDark ? "#e3f2fd" : "#1a0033",
    backgroundColor: isDark ? "#1a0033" : "#e3f2fd",
    borderRadius: "24px",
    padding: "12px 24px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s, color 0.3s, transform 0.3s",
    "&:hover": {
      backgroundColor: isDark ? "#452a4e" : "#a987c4",
      transform: "scale(1.05)",
    },
  };

  return (
    <Box
      id="contact"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        borderRadius: "16px",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        backgroundColor: isDark ? "#1a0033" : "#e3f2fd",
        maxWidth: "600px",
        margin: "auto",
        marginBottom: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          mb: 4,
          color: isDark ? "#e3f2fd" : "#1a0033",
          ...fontStyle,
        }}
      >
        Contact Me
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>
      <Button type="submit" sx={{ ...buttonStyles, mt: 4 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactMe;
