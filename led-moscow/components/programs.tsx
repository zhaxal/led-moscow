import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./ui/header";

const Programs = () => {
  return (
    <Container disableGutters maxWidth={"lg"}>
      <Box sx={{ px: "150px" }}>
        <Header text="ПРОГРАММА" />
      </Box>
    </Container>
  );
};

export default Programs;
