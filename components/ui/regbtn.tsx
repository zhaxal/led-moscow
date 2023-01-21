import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

interface Props {
  onClick: () => void;
  isMobile: boolean;
}

const RegBtn = ({ onClick, isMobile }: Props) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <Stack
      sx={{
        backgroundImage: isMobile
          ? "url(/images/backgrounds/btnBg.svg)"
          : "url(/images/backgrounds/mobile/btnBg.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: isMobile ? "95px" : "61px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack sx={{ minHeight: "60px", justifyContent: "center" }}>
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
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Typography>
      </Stack>
    </Stack>
  );
};

export default RegBtn;
