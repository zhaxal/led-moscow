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
        <Header isMobile={isMobile} text="СЕМЕЙНЫЕ «ЗИМНИЕ СТАРТЫ»" />
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
                    В&nbsp;рамках соревнований состоится семейная конькобежная
                    эстафета &laquo;ЗИМНИЕ СТАРТЫ&raquo;:
                  </p>
                  <br />
                  <p style={{ textIndent: "30px" }}>
                    К&nbsp;участию в&nbsp;соревнованиях допускаются сборные
                    семейные команды города Москвы. команда в&nbsp;составе:
                    мама, папа и&nbsp;ребенок. Эстафета пройдет в&nbsp;4-ех
                    возрастных категориях (по&nbsp;возрасту ребенка):
                  </p>
                  <div style={{ paddingLeft: "30px" }}>
                    <p>4-6 лет</p>
                    <p>7-8 лет</p>
                    <p>9-10 лет</p>
                    <p>11-12 лет</p>
                  </div>
                  <br />
                  <div style={{ paddingLeft: "30px" }}>
                    <p style={{ fontFamily: "Gotham Pro Medium" }}>
                      <strong>Участникам необходимо с&nbsp;собой иметь:</strong>
                    </p>

                    <ol>
                      <li>
                        Документ, удостоверяющий личность, подтверждающий
                        родство, адрес и&nbsp;возраст ребенка.
                      </li>
                      <br />
                      <li>
                        Допуск врача для участия в&nbsp;соревнованиях
                        (в&nbsp;общей заявке или в&nbsp;виде отдельной справки).
                      </li>
                      <br />
                      <li>
                        Страховое свидетельство от&nbsp;несчастного случая.
                      </li>
                      <br />
                      <li>Шлем, комплект спортивной одежды и&nbsp;коньки.</li>
                    </ol>
                  </div>
                </div>
              </Box>

              <Box
                width="390px"
                height="auto"
                component="img"
                src="/images/family.png"
              />
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
                    .open("https://mssport.timepad.ru/event/2748416/", "_blank")
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
        <Header isMobile={isMobile} text="СЕМЕЙНЫЕ «ЗИМНИЕ СТАРТЫ»" />
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
                В&nbsp;рамках соревнований состоится семейная конькобежная
                эстафета &laquo;ЗИМНИЕ СТАРТЫ&raquo;:
              </p>
              <br />
              <p style={{ textIndent: "30px" }}>
                К&nbsp;участию в&nbsp;соревнованиях допускаются сборные семейные
                команды города Москвы. команда в&nbsp;составе: мама, папа
                и&nbsp;ребенок. Эстафета пройдет в&nbsp;4-ех возрастных
                категориях (по&nbsp;возрасту ребенка):
              </p>
              <div style={{ paddingLeft: "30px" }}>
                <p>4-6 лет</p>
                <p>7-8 лет</p>
                <p>9-10 лет</p>
                <p>11-12 лет</p>
              </div>
              <br />
              <div style={{ paddingLeft: "30px" }}>
                <p style={{ fontFamily: "Gotham Pro Medium" }}>
                  <strong>Участникам необходимо с&nbsp;собой иметь:</strong>
                </p>

                <ol>
                  <li>
                    Документ, удостоверяющий личность, подтверждающий родство,
                    адрес и&nbsp;возраст ребенка.
                  </li>
                  <br />
                  <li>
                    Допуск врача для участия в&nbsp;соревнованиях (в&nbsp;общей
                    заявке или в&nbsp;виде отдельной справки).
                  </li>
                  <br />
                  <li>Страховое свидетельство от&nbsp;несчастного случая.</li>
                  <br />
                  <li>Шлем, комплект спортивной одежды и&nbsp;коньки.</li>
                </ol>
              </div>
            </div>
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
                  .open("https://mssport.timepad.ru/event/2748416/", "_blank")
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
