import { Box, useMediaQuery, useTheme } from "@mui/material";
import About from "components/about";
import Cover from "components/cover";
import Footer from "components/footer";
import Participants from "components/participants";
import Programs from "components/programs";
import Tutorial from "components/tutorial";
import { NextPage } from "next";
import React from "react";

const preview: NextPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box>
      <Cover isMobile={matches} />
      <About isMobile={matches} />
      <Programs isMobile={matches} />
      <Participants isMobile={matches} />
      <Tutorial isMobile={matches} />
      <Footer isMobile={matches} />
    </Box>
  );
};

export default preview;
