import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Header from "./ui/header";

interface Props {
  isMobile: boolean;
}

const About = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:400px)");

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
              <span style='margin-bottom: 10px; padding-left: 1.5em;
              text-indent:-1.5em;' data-mce-style='margin-bottom: 10px;padding-left: 1.5em;
              text-indent:-1.5em;'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>«Лёд надежды нашей»</span>  –   одно из старейших конькобежных состязаний в
              России. Мероприятие ежегодно объединяет сотни любителей
              конькобежного спорта.</span>
              </br>
              </br>
              <span style='margin-bottom: 10px; padding-left: 1.5em;
              text-indent:-1.5em;' data-mce-style='margin-bottom: 10px; padding-left: 1.5em;
              text-indent:-1.5em;'>В разные годы в турнире участвовали будущие
              звезды конькобежного спорта:</span>
              </br>
              </br>
                <ul style="margin-left: 2em">
                    <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Валерий Муратов</span> – трехкратный призер
                    Олимпийских игр, заслуженный мастер спорта СССР, главный тренер
                    сборной России; </li>
                    <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Светлана Журова</span> – заслуженный мастер спорта России, олимпийская чемпионка; </li>
                    <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Дмитрий Дорофеев</span> – серебряный призёр Олимпийских игр; </li>
                    <li><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Екатерина Лобышева</span> – бронзовый призёр в командной гонке на Олимпийских играх и многие другие.</li>
                </ul>`,
            }}
          />
        </Stack>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "64px", width: "100%" }}>
      <Stack direction={"column"}>
        <Header isMobile={isMobile} text="О СОРЕВНОВАНИЯХ" />
        <Box
          sx={{
            backgroundImage: "url(/images/backgrounds/mobile/about-top.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "524px",
            width: "100%",
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
                width: "80%",
              }}
              dangerouslySetInnerHTML={{
                __html: `<span style='margin-bottom: 10px; padding-left: 1.5em;
                text-indent:-1.5em;' data-mce-style='margin-bottom: 10px;padding-left: 1.5em;
                text-indent:-1.5em;'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>«Лёд надежды нашей»</span>  –   одно из старейших конькобежных состязаний в
                России. Мероприятие ежегодно объединяет сотни любителей
                конькобежного спорта.</span>
                </br>
                </br>
                <span style='margin-bottom: 10px; padding-left: 1.5em;
                text-indent:-1.5em;' data-mce-style='margin-bottom: 10px; padding-left: 1.5em;
                text-indent:-1.5em;'>В разные годы в турнире участвовали будущие
                звезды конькобежного спорта:</span>
                </br>
                </br>
                  <ul style="margin-left: 2em">
                      <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Валерий Муратов</span> – трехкратный призер
                      Олимпийских игр, заслуженный мастер спорта СССР, главный тренер
                      сборной России; </li>
                      <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Светлана Журова</span> – заслуженный мастер спорта России, олимпийская чемпионка; </li>
                      <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Дмитрий Дорофеев</span> – серебряный призёр Олимпийских игр; </li>
                      <li><span style='font-weight: 400px; font-family: "Gotham Pro Medium"' data-mce-style='font-weight: 400px; font-family: "Gotham Pro Medium"'>Екатерина Лобышева</span> – бронзовый призёр в командной гонке на Олимпийских играх и многие другие.</li>
                  </ul>`,
              }}
            />
          </Stack>
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
