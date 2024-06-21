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
      color: isDark ? "#d16aff" : "#310047",
    },
    "& .MuiInputLabel-root": {
      color: isDark ? "#d16aff" : "#310047",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: isDark ? "#d16aff" : "#310047",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: isDark ? "#d16aff" : "#310047",
    },
  };

  const buttonStyles = {
    ...fontStyle,
    color: isDark ? "#d16aff" : "#310047",
    backgroundColor: isDark ? "#310047" : "#d16aff",
    borderRadius: "8px",
    padding: "12px 24px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold",
    textTransform: "none",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: isDark ? "#452a4e" : "#a987c4",
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
        mt: 4,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        component="h4"
        sx={{
          mb: 4,
          color: isDark ? "#d16aff" : "#310047",
          ...fontStyle,
        }}
      >
        Contact Me
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 600 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            sx={{ ...textFieldStyles, ...fontStyle }}
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
      <Button type="submit" sx={{ ...buttonStyles, m: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactMe;
