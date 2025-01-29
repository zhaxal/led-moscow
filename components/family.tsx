import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Groups from "./ui/groups";
import Header from "./ui/header";
import RegBtn from "./ui/regbtn";

interface Props {
  isMobile: boolean;
}

const Family = ({ isMobile }: Props) => {
  return isMobile ? (
    <Container maxWidth={"lg"} disableGutters sx={{ mt: "82px" }}>
      <Box>
        <Header isMobile={isMobile} text="беговелогонка и детские коньки" />
      </Box>
      <Box
        mt={"80px"}
        sx={{
          backgroundImage: "url(/images/backgrounds/family_desktop.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "700px",
          position: "relative",
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
          <Stack alignItems="flex-end">
            <Stack
              alignItems="center"
              direction="row"
              sx={{ width: "980px" }}
              spacing={"10px"}
            >
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
                  <p style={{ textIndent: "30px" }}>
                    В рамках соревнований состоятся БЕГОВЕЛОГОНКА на ЛЬДУ и
                    ГОНКИ на коньках для детей от 4 до 8 лет:
                  </p>
                  <br />
                  <p style={{ textIndent: "30px" }}>
                    Участники приглашаются со своими беговелами, коньками иё
                    шлемами.
                  </p>
                  <br />
                  <p style={{ textIndent: "30px" }}>
                    ВНИМАНИЕ! УСТРОЙСТА ПРОТИВОСКОЛЬЖЕНИЯ ДЛЯ БОТИНОК И ПОКРЫШЕК
                    БЕГОВЕЛОВ ЗАПРЕЩЕНЫ.
                  </p>
                </div>
              </Box>

              <Box
                width="390px"
                height="auto"
                component="img"
                src="/images/family.png"
              />
            </Stack>

            <Stack
              component="a"
              target={"_blank"}
              href="/docs/regs.pdf"
              my="1rem"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >
              {/* <Typography
                sx={{
                  color: "white",
                  textDecoration: "underline",
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontFamily: "Gotham Pro Medium",
                  textAlign: "center",
                }}
              >
                РЕГЛАМЕНТ ЭСТАФЕТЫ
              </Typography> */}
            </Stack>

            <Box
              sx={{
                position: "absolute",
                bottom: "3px",
                right: "0px",
                width: "543px",
              }}
            >
              <RegBtn
                isMobile={isMobile}
                onClick={() => {
                  window
                    .open("https://forms.gle/rGGhJFpBQ6AuF5qXA", "_blank")
                    ?.focus();
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "90px", width: "100%" }}>
      <Stack spacing={"56px"}>
        <Header isMobile={isMobile} text="беговелогонка и детские коньки" />
        <Box
          mt={"30px"}
          sx={{
            backgroundImage:
              "url(/images/backgrounds/mobile/family_mobile.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1110px",
            position: "relative",
            px: "20px",
          }}
        >
          <Stack
            spacing={"8px"}
            sx={{
              height: "90%",
              width: "100%",
              fontSize: "16px",
              lineHeight: "16px",
              fontFamily: "Gotham Pro Light",
              color: "white",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              width="320px"
              height="auto"
              component="img"
              src="/images/family.png"
            />
            <div>
              <p style={{ textIndent: "30px" }}>
                В рамках соревнований состоятся БЕГОВЕЛОГОНКА на ЛЬДУ и ГОНКИ на
                коньках для детей от 4 до 8 лет:
              </p>
              <br />
              <p style={{ textIndent: "30px" }}>
                Участники приглашаются со своими беговелами, коньками иё
                шлемами.
              </p>
              <br />
              <p style={{ textIndent: "30px" }}>
                ВНИМАНИЕ! УСТРОЙСТА ПРОТИВОСКОЛЬЖЕНИЯ ДЛЯ БОТИНОК И ПОКРЫШЕК
                БЕГОВЕЛОВ ЗАПРЕЩЕНЫ.
              </p>
            </div>
            <Stack
              component="a"
              target={"_blank"}
              href="/docs/regs.pdf"
              my="1rem"
              width="100%"
              alignItems="center"
              justifyContent="center"
            >

            </Stack>
          </Stack>

          <Stack
            sx={{
              position: "absolute",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RegBtn
              isMobile={isMobile}
              onClick={() => {
                window
                  .open("https://forms.gle/rGGhJFpBQ6AuF5qXA", "_blank")
                  ?.focus();
              }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Family;
