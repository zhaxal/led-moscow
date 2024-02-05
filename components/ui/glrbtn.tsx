import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

interface Props {
  onClick: () => void;
  isMobile: boolean;
}

const GlrBtn = ({ onClick, isMobile }: Props) => {
  const [isHover, setHover] = useState<boolean>(false);
  const isSmaller = useMediaQuery("(min-width:415px)");


  return (
    <Box sx={{ position: "relative", zIndex: 2}}>
      <Stack
        sx={{
          backgroundImage: "url(/images/backgrounds/btnBgF.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "91%",
          minWidth: "323px",
          py: isMobile ? "21px" : "15px",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Stack
          sx={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mossport",
              fontSize: isMobile ? "36px" : "24px",
              lineHeight: isMobile ? "36px" : "24px",
              color: "white",
              textShadow: isHover
                ? "0px 0px 6px rgba(255, 255, 255, 0.5)"
                : "none",
            }}
          >
            БОЛЬШЕ ФОТО
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/btnBgB.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: isMobile ? "85px" : "54px",
          width: "96%",
          minWidth: "340px",
          position: "absolute",
          bottom: "6px",
          left: "-20px",
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default GlrBtn;
