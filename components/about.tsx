import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Header from "./ui/header";

interface Props {
  isMobile: boolean;
}

const About = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:415px)");

  return isMobile ? (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px", mb: "46px" }}>
        <Header isMobile={isMobile} text="О СОРЕВНОВАНИЯХ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/about.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "703px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            width: "40%",
            height: "80%",
            ml: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontSize: "20px",
              lineHeight: "20px",
              fontFamily: "Gotham Pro Light",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: `
              <div>
                <span style='margin-bottom: 10px; line-height: 20px; padding-left: 1.5em;
                text-indent:-1.5em;' data-mce-style='margin-bottom: 10px;padding-left: 1.5em;
                text-indent:-1.5em;'><span style='font-weight: 415px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 415px; font-family: "Gotham Pro Medium"'>«Лёд надежды нашей»</span>  –   одно из старейших конькобежных состязаний в
                России. Мероприятие ежегодно объединяет сотни любителей
                конькобежного спорта.</span>
                </br>
                </br>
                <span style='margin-bottom: 10px; line-height: 20px; padding-left: 1.5em;
                text-indent:-1.5em;' data-mce-style='margin-bottom: 10px; padding-left: 1.5em;
                text-indent:-1.5em;'>В разные годы в турнире участвовали будущие звезды конькобежного спорта, заслуженные мастера спорта России и СССР:</span>
                </br>
                </br>
                  <ul style="margin-left: 2em">
                      <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Валерий Муратов, трехкратный призер Олимпийских игр по конькобежному спорту, главный тренер сборной России; </li>
                      <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Светлана Журова, олимпийская чемпионка;</li>
                      <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Дмитрий Дорофеев, серебряный призёр олимпийских игр;</li>
                      <li style='fontFamily: "Gotham Pro Light";' data-mce-style='fontFamily: "Gotham Pro Light";'>Екатерина Лобышева, бронзовый призёр в командной гонке на Олимпийских играх и другие.</li>
                  </ul>
              </div>`,
            }}
          />
        </Stack>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "64px", width: "100%" }}>
      <Stack direction={"column"} sx={{ px: "10px" }}>
        <Header isMobile={isMobile} text="О СОРЕВНОВАНИЯХ" />
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(/images/backgrounds/mobile/about-top.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "494px",
              width: "100%",
              mt: "32px",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Gotham Pro Light",
                  fontSize: isSmaller ? "16px" : "14px",
                  lineHeight: "15.31px",
                  fontWeight: 400,
                  color: "white",
                  width: "85%",
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                  <div>
                  <span style='margin-bottom: 10px; line-height: 20px; padding-left: 1.5em;
                  text-indent:-1.5em;' data-mce-style='margin-bottom: 10px;padding-left: 1.5em;
                  text-indent:-1.5em;'><span style='font-weight: 415px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 415px; font-family: "Gotham Pro Medium"'>«Лёд надежды нашей»</span>  –   одно из старейших конькобежных состязаний в
                  России. Мероприятие ежегодно объединяет сотни любителей
                  конькобежного спорта.</span>
                  </br>
                  </br>
                  <span style='margin-bottom: 10px; line-height: 20px; padding-left: 1.5em;
                  text-indent:-1.5em;' data-mce-style='margin-bottom: 10px; padding-left: 1.5em;
                  text-indent:-1.5em;'>В разные годы в турнире участвовали будущие звезды конькобежного спорта, заслуженные мастера спорта России и СССР:</span>
                  </br>
                  </br>
                    <ul style="margin-left: 2em">
                        <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Валерий Муратов, трехкратный призер Олимпийских игр по конькобежному спорту, главный тренер сборной России; </li>
                        <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Светлана Журова, олимпийская чемпионка;</li>
                        <li style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";' data-mce-style='margin-bottom: 10px; fontFamily: "Gotham Pro Light";'>Дмитрий Дорофеев, серебряный призёр олимпийских игр;</li>
                        <li style='fontFamily: "Gotham Pro Light";' data-mce-style='fontFamily: "Gotham Pro Light";'>Екатерина Лобышева, бронзовый призёр в командной гонке на Олимпийских играх и другие.</li>
                    </ul>
                </div>`,
                }}
              />
            </Stack>
          </Box>
          <Box
            sx={{
              backgroundImage: "url(/images/backgrounds/mobile/about-topB.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "510px",
              width: "100%",
              position: "absolute",
              top: 0,
              left: "-20px",
              zIndex: -1,
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/backgrounds/mobile/about-bottom.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            width: "95%",
          }}
        />
      </Stack>
    </Box>
  );
};

export default About;
