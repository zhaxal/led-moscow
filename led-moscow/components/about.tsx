import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Header from "./ui/header";

const About = () => {
  return (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px", mb: "46px" }}>
        <Header text="О СОРЕВНОВАНИЯХ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/about.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "593px",
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
          <Typography
            variant={"about"}
            dangerouslySetInnerHTML={{
              __html: `
              <body id='tinymce' class='mce-content-body ' data-id='text' spellcheck='false' contenteditable='true'>
              <span style='margin-bottom: 10px; padding-left: 1.5em;
              text-indent:-1.5em;' data-mce-style='margin-bottom: 10px;padding-left: 1.5em;
              text-indent:-1.5em;'><strong>«Лёд надежды нашей»</strong>  –   одно из старейших конькобежных состязаний в
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
                    <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'><strong>Валерий Муратов</strong> – трехкратный призер
                    Олимпийских игр, заслуженный мастер спорта СССР, главный тренер
                    сборной России; </li>
                    <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><strong>Светлана Журова</strong> – олимпийская чемпионка; </li>
                    <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><strong>Дмитрий Дорофеев</strong> – серебряный призёр ОИ; </li>
                    <li style='margin-bottom: 10px' data-mce-style='margin-bottom: 10px'><strong>Екатерина Лобышева</strong> – бронзовый
                    призёр в командной гонке на ОИ и многие другие.</li>
                </ul>
              </body>`,
            }}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default About;
