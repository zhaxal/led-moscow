import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface Props {
  isMobile: boolean;
}

const IceIcon = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:400px)");

  return (
    <Stack
      direction={"row"}
      spacing={isMobile ? "26px" : "11px"}
      sx={{ maxHeight: isMobile ? "179px" : isSmaller ? "106px" : "90px" }}
    >
      <Box
        component={"img"}
        src={"/images/logos/iceLogo.svg"}
        sx={{ maxWidth: isMobile ? "203px" : isSmaller ? "153px" : "135px" }}
      />
      <Typography
        sx={{
          fontFamily: "Mossport",
          fontWeight: 400,
          fontSize: isMobile ? "64px" : isSmaller ? "36px" : "30px",
          lineHeight: isMobile ? "56px" : "32px",
          maxWidth: isMobile ? "203px" : isSmaller ? "133px" : "90px",
          letterSpacing: "0.015em",
          background:
            "linear-gradient(18.76deg, #1D71B8 -178.12%, #1F74BA -99.62%, #247DC1 -42.24%, #2D8DCC 8.26%, #39A3DC 54.79%, #3AA5DD 57.55%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ЛЁД НАДЕЖДЫ НАШЕЙ
      </Typography>
    </Stack>
  );
};

export default IceIcon;
