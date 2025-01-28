import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
          zIndex: 1,
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
              dateTo="9:00"
              desc="Работа комиссии по допуску участников к соревнованиям"
              isMobile={isMobile}
            />
            <Date
              dateFrom="9:00"
              dateTo="9:15"
              desc="Торжественное открытие"
              isMobile={isMobile}
            />
            <Date
              dateFrom="9:15"
              dateTo="11:30"
              desc="Основная часть соревнований"
              isMobile={isMobile}
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
            <Date dateFrom="12:00" desc="Награждение" isMobile={isMobile} />
          </Stack>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "-2%",
            right: "3%",
            width: "543px",
          }}
        ></Box>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "32px", width: "100%" }}>
      <Stack spacing={"30px"}>
        <Header isMobile={isMobile} text="ПРОГРАММА" />
        <Box
          sx={{
            backgroundImage: "url(/images/backgrounds/mobile/programBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "646px",
            position: "relative",
            px: "40px",
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={"8px"}
          >
            <Date
              dateFrom="8:00"
              dateTo="9:00"
              desc="Работа комиссии по допуску участников к соревнованиям"
              isMobile={isMobile}
            />
            <Date
              dateFrom="9:00"
              dateTo="9:15"
              desc="Торжественное открытие"
              isMobile={isMobile}
            />
            <Date
              dateFrom="9:15"
              dateTo="11:30"
              desc="Основная часть соревнований"
              isMobile={isMobile}
            />
            <Typography
              sx={{
                fontFamily: "Gotham Pro Regular",
                fontStyle: "italic",
                textAlign: "center",
                color: "white",
                fontSize: "14x",
                lineHeight: "14px",
                fontWeight: 500,
              }}
            >
              (Забеги начинаются с самых младших возрастов. Сначала соревнуются
              девочки, затем мальчики. В каждом забеге участвуют по 3
              спортсмена).
            </Typography>
            <Date dateFrom="12:00" desc="Награждение" isMobile={isMobile} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Programs;
