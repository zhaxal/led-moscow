import { Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "64px",
        boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="heading">{text}</Typography>
    </Stack>
  );
};

export default Header;
