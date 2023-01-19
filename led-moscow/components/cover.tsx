import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

const Cover = () => {
  return (
    <Container disableGutters maxWidth={"lg"}>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/cover.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "768px",
          width: "1240px",
        }}
      >
        <Stack
          sx={{
            alignItems: "flex-end",
            width: "100%",
            pt: "108px",
          }}
          spacing={"14px"}
        >
          <Typography
            sx={{
              fontFamily: "Mossport",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "64px",
              textAlign: "right",
              maxWidth: "436px",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundImage:
                "linear-gradient(6.42deg, #B81D1D -9.7%, #BA1F1F 35.27%, #C12424 68.14%, #CC2D2D 97.06%, #DC3939 123.71%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%)",
            }}
          >
            СОРЕВНОВАНИЯ ПО КОНЬКОБЕЖНОМУ СПОРТУ
          </Typography>
          <Box
            component={"img"}
            src={"/images/logos/iceLogo.svg"}
            alt={"iceLogo"}
            sx={{ maxWidth: "470px" }}
          />
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "24px",
              textAlign: "right",
              color: "white",
            }}
          >
            4 ФЕВРАЛЯ
          </Typography>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "24px",
              textAlign: "right",
              whiteSpace: "pre-line",
            }}
          >
            {`«Лужники» 
              Каток «Южный полюс»`}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Cover;
