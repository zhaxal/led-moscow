import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Header from "./ui/header";

const About = () => {
  return (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px" }}>
        <Header text="О СОРЕВНОВАНИЯХ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/about.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "550px",
          width: "100%",
        }}
      >
        <Box sx={{ width: "46%", ml: "150px", pt: "80px" }}>
          <Typography
            variant={"about"}
            dangerouslySetInnerHTML={{
              __html: `<strong>«Лёд надежды нашей»</strong>  –   одно из старейших конькобежных состязаний в
            России. Мероприятие ежегодно объединяет сотни любителей
            конькобежного спорта. 
            </br>
            </br>
            В разные годы в турнире участвовали будущие
            звезды конькобежного спорта: 
            </br>
            </br>
                <ul>
                    <li><strong>Валерий Муратов</strong> – трехкратный призер
                    Олимпийских игр, заслуженный мастер спорта СССР, главный тренер
                    сборной России; </li>
                    <li><strong>Светлана Журова</strong> – олимпийская чемпионка; </li>
                    <li><strong>Дмитрий Дорофеев</strong> – серебряный призёр ОИ; </li>
                    <li><strong>Екатерина Лобышева</strong> – бронзовый
                    призёр в командной гонке на ОИ и многие другие.</li>
                </ul>`,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
