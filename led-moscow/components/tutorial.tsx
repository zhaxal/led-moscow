import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./ui/header";

const Tutorial = () => {
  return (
    <Box width={"100%"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px" }}>
        <Header text="КАК ПРИНЯТЬ УЧАСТИЕ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/tutorBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "550px",
          width: "100%",
          pr: "230px"
        }}
      ></Box>
    </Box>
  );
};

export default Tutorial;
