import { Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  isMobile: boolean;
}

const Header = ({ text, isMobile }: Props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: isMobile ? "64px" : "36px",
        boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant={isMobile ? "heading" : "headingMobile"}>
        {text}
      </Typography>
    </Stack>
  );
};

export default Header;
