import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import LogoIcon from "./logo/LogoIcon";
import Logo from "./logo/Logo";

const LeftNavbar = () => {
  const isMobileOrTablet = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  return <Box>{isMobileOrTablet ? <LogoIcon /> : <Logo />}</Box>;
};

export default LeftNavbar;
