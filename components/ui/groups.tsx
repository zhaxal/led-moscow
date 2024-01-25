import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

interface Props {
  group: string;
  desc: string;
  isMobile: boolean;
}

const Groups = ({ group, desc, isMobile }: Props) => {
  return (
    <Stack
      sx={{
        background: "#F2F2F2",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        minHeight: "36px",
        width: "100%",
        alignItems: "center",
      }}
      direction={"row"}
      spacing={"24px"}
      px={isMobile ? "1em" : "1px"}
    >
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gotham Pro Bold",
            fontWeight: 700,
            fontSize: isMobile ? "24px" : "14px",
            lineHeight: isMobile ? "23px" : "15px",
            color: "black",
          }}
        >
          {group}
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontFamily: "Gotham Pro Light",
          fontWeight: 400,
          fontSize: isMobile ? "24px" : "14px",
          lineHeight: isMobile ? "23px" : "15px",
          color: "black",
          width: "70%",
        }}
      >
        {desc}
      </Typography>
    </Stack>
  );
};

export default Groups;
