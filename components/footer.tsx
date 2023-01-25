import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import IceIcon from "./ui/ice";

interface Props {
  isMobile: boolean;
}

const Footer = ({ isMobile }: Props) => {
  return isMobile ? (
    <Container
      maxWidth={"lg"}
      disableGutters
      sx={{ mt: "21px", mb: "66px", position: "relative", id: "Footer" }}
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A386f4d75d3a9b20360536d057c2e1cb2042f5c49d65c4ba2becf0e34d2bd330d&amp;source=constructor"
        width="100%"
        height="768px"
        frameBorder="0px"
      />
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/footerBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "70%",
          position: "absolute",
          top: "-0.5%",
          right: 0,
        }}
      >
        <Stack
          sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
          spacing={"50px"}
        >
          <IceIcon isMobile={isMobile} />

          <Stack spacing={"50px"}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "28.8px",
                  textDecoration: "underline",
                  textDecorationSkipInk: "none",
                  textDecorationThickness: "1px",
                }}
              >
                <a
                  href={`https://disk.yandex.ru/i/5toaaRtmFpG8Lw`}
                  target={"_blank"}
                >
                  Положение о проведении
                </a>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "28.8px",
                }}
              >
                Контакт организатора:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "28.8px",
                }}
              >
                +7-926-082-38-64 (Александр Леонидович)
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "25.63px",
                textDecorationLine: "underline",
                textDecorationThickness: "1px",
              }}
            >
              Как добраться?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                maxWidth: "570px",
                fontSize: "24px",
                lineHeight: "28.8px",
              }}
            >
              Каток находится напротив Дворца водных видов спорта «Лужники» в
              3-5 минутах от метро.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "61px", mb: "66px", position: "relative" }}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A386f4d75d3a9b20360536d057c2e1cb2042f5c49d65c4ba2becf0e34d2bd330d&amp;source=constructor"
        width="100%"
        height="1026px"
        frameBorder="0px"
      />
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/mobile/footerBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "60%",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Stack
          spacing={"50px"}
          sx={{
            alignItems: "flex-start",
            px: "40px",
            height: "100%",
            pt: "160px",
          }}
        >
          <IceIcon isMobile={isMobile} />
          <Stack spacing={"50px"} sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
                textDecoration: "underline",
                textDecorationSkipInk: "none",
                textDecorationThickness: "1px",
              }}
            >
              <a
                href={`https://disk.yandex.ru/i/5toaaRtmFpG8Lw`}
                target={"_blank"}
              >
                Положение о проведении
              </a>
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Контакт организатора:
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                +7-926-082-38-64 (Александр Леонидович)
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "22.78px",
                textDecorationLine: "underline",
                textDecorationThickness: "1px",
              }}
            >
              Как добраться?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "24px",
              }}
            >
              Каток находится напротив дворца водных видов спорта «Лужники» в
              3-5 минутах от метро «Воробьевы горы», 3 выход.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
