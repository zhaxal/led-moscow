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

const Master = ({ isMobile }: Props) => {
  return isMobile ? (
    <Container maxWidth={"lg"} disableGutters sx={{ mt: "99px" }}>
      <Box>
        <Header isMobile={isMobile} text="МАСТЕР-КЛАСС" />
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
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            sx={{ width: "980px" }}
            spacing={"10px"}
          >
            <Box
              width="330px"
              height="auto"
              component="img"
              src="/images/master_desktop.png"
            />
            <Stack spacing="45px">
              <Box
                maxWidth="600px"
                sx={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontFamily: "Gotham Pro Light",
                  color: "white",
                }}
              >
                <div>
                  <p style={{ textIndent: "25px" }}>
                    После окончания соревнований все желающие смогут
                    поучаствовать в мастер-классе по фигурному катанию.
                    Мастер-класс проведут:
                  </p>
                  <br />
                  <p style={{ textIndent: "25px" }}>
                    <strong
                      style={{
                        fontWeight: 700,
                        fontFamily: "Gotham Pro Regular",
                      }}
                    >
                      Анна &nbsp;Погорилая
                    </strong>{" "}
                    - Бронзовый призёр чемпионата мира (2016), серебряный призёр
                    чемпионата Европы (2017), двукратный бронзовый призёр
                    чемпионата Европы (2015, 2016), и бронзовый призёр финала
                    Гран-при (2016).
                  </p>
                  <br />
                  <p style={{ textIndent: "25px" }}>
                    <strong
                      style={{
                        fontWeight: 700,
                        fontFamily: "Gotham Pro Regular",
                      }}
                    >
                      Александр &nbsp;Энберт
                    </strong>{" "}
                    - Заслуженный мастер спорта России. Cеребряный призёр на
                    Олимпийских играх в Корее в командных соревнованиях.
                  </p>
                </div>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "15px",
                  color: "white",
                }}
              >
                *для участия в мастер-классе требуется регистрация
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "32px", width: "100%" }}>
      <Stack spacing={"30px"}>
        <Header isMobile={isMobile} text="МАСТЕР-КЛАСС" />
        <Box
          sx={{
            backgroundImage: "url(/images/backgrounds/mobile/masterBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "990px",
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
            <Box
              width="360px"
              height="auto"
              component="img"
              src="/images/master_mobile.png"
            />
            <Stack spacing="45px">
              <Box
                maxWidth="400px"
                sx={{
                  fontSize: "16px",
                  lineHeight: "normal",
                  fontFamily: "Gotham Pro Light",
                  color: "white",
                }}
              >
                <div>
                  <p style={{ textIndent: "25px" }}>
                    После окончания соревнований все желающие смогут
                    поучаствовать в мастер-классе по фигурному катанию.
                    Мастер-класс проведут:
                  </p>
                  <br />
                  <p style={{ textIndent: "25px" }}>
                    <strong
                      style={{
                        fontWeight: 700,
                        fontFamily: "Gotham Pro Regular",
                      }}
                    >
                      Анна &nbsp;Погорилая
                    </strong>{" "}
                    - Бронзовый призёр чемпионата мира (2016), серебряный призёр
                    чемпионата Европы (2017), двукратный бронзовый призёр
                    чемпионата Европы (2015, 2016), и бронзовый призёр финала
                    Гран-при (2016).
                  </p>
                  <br />
                  <p style={{ textIndent: "25px" }}>
                    <strong
                      style={{
                        fontWeight: 700,
                        fontFamily: "Gotham Pro Regular",
                      }}
                    >
                      Александр &nbsp;Энберт
                    </strong>{" "}
                    - Заслуженный мастер спорта России. Cеребряный призёр на
                    Олимпийских играх в Корее в командных соревнованиях.
                  </p>
                </div>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "15px",
                  color: "white",
                }}
              >
                *для участия в мастер-классе требуется регистрация
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Master;
