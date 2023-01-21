import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "./ui/header";
import RegBtn from "./ui/regbtn";

const Tutorial = () => {
  return (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px" }}>
        <Header text="КАК ПРИНЯТЬ УЧАСТИЕ" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/tutorBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "800px",
          width: "100%",
          mt: "45px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            width: "46%",
            height: "70%",
            ml: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Typography
            variant={"about"}
            dangerouslySetInnerHTML={{
              __html: `
                            <body id='tinymce' class='mce-content-body ' data-id='text' spellcheck='false' contenteditable='true'>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>1. Зарегистрироваться на сайте проекта <strong style='text-decoration: underline; text-decoration-thickness: 1px'>до 3 февраля</strong></div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>2. Собрать пакет документов (оригиналы):</div>
                            <ul style="margin-left: 3em">
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>паспорт или свидетельство о рождении;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис ОМС или ДМС;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис страхования жизни и здоровья от несчастных случаев, действительный на день соревнования;</li>
                                <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>медицинское заключение о допуске к спортивным соревнованиям по форме 1144-н;</li>
                            </ul>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>3. Предоставить документы в зоне регистрации перед </br> началом соревнований.</div>
                            <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>4. На старт! Желаем успехов!</div>
                            </body>`,
            }}
          />
          <Stack
            sx={{
              width: "100%",
              height: "42px",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "23px",
                color: "white",
              }}
            >
              Рядом с катком есть пункт проката.
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "2%",
            right: "3%",
            width: "543px",
          }}
        >
          <RegBtn onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  );
};
export default Tutorial;