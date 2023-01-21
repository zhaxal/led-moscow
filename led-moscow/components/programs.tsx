import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Date from "./ui/date";
import Header from "./ui/header";
import RegBtn from "./ui/regbtn";

interface Props {
  isMobile: boolean;
}

const Programs = ({ isMobile }: Props) => {
  return isMobile ? (
    <Container maxWidth={"lg"} disableGutters sx={{ mt: "99px" }}>
      <Box>
        <Header isMobile={isMobile} text="ПРОГРАММА" />
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/programsBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "550px",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            height: "90%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "736px" }} spacing={"8px"}>
            <Date
              dateFrom="8:00"
              dateTo="8:50"
              desc="Регистрация участников, жеребьевка"
            />
            <Date
              dateFrom="9:15"
              dateTo="11:30"
              desc="Основная часть соревнований"
            />
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontStyle: "italic",
                textAlign: "center",
                color: "white",
                fontSize: "16px",
                lineHeight: "16px",
                fontWeight: 500,
              }}
            >
              (Забеги начинаются с самых младших возрастов. Сначала соревнуются
              девочки, затем мальчики. В каждом забеге участвуют по 3
              спортсмена).
            </Typography>
            <Date
              dateFrom="11:30"
              dateTo="12:00"
              desc="Подведение итогов и закрытие соревнований "
            />
            <Typography
              sx={{
                fontFamily: "Gotham Pro Light",
                color: "white",
                fontSize: "16px",
                lineHeight: "15px",
                fontWeight: 500,
              }}
              dangerouslySetInnerHTML={{
                __html: `<strong>Важно:</strong> Результаты фиксируются с помощью программы хронометража циклических видов спорта «L-SPORT»`,
              }}
            ></Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "-2%",
            right: "3%",
            width: "543px",
          }}
        >
          <RegBtn isMobile={isMobile} onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  ) : (
    <Box></Box>
  );
};

export default Programs;
