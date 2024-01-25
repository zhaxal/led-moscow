import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Header from "./ui/header";
import RegBtn from "./ui/regbtn";

interface Props {
  isMobile: boolean;
}

const Tutorial = ({ isMobile }: Props) => {
  const isSmaller = useMediaQuery("(min-width:415px)");

  return isMobile ? (
    <Container maxWidth={"xl"} sx={{ mt: "80px" }}>
      <Box sx={{ px: "150px" }}>
        <Header isMobile={isMobile} text="КАК ПРИНЯТЬ УЧАСТИЕ" />
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
            height: "80%",
            ml: "150px",
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Box
            sx={{
              fontSize: "20px",
              lineHeight: "20px",
              fontFamily: "Gotham Pro Light",
              maxWidth: "640px",
              color: "white",
            }}
            dangerouslySetInnerHTML={{
              __html: `
              <div>
                <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px;'>
                  <span style='margin-right: 5px'>1. </span>
                  <div>Зарегистрироваться 
                  <span style='font-weight: 700px; font-family: "Gotham Pro Bold"; text-decoration-skip-ink: none; text-decoration: underline; text-decoration-thickness: 1px' data-mce-style='font-weight: 700px; font-family: "Gotham Pro Bold"; text-decoration-skip-ink: none; text-decoration: underline; text-decoration-thickness: 1px'>до 1 февраля</span> 
                  включительно. 
                  <span style='font-weight: 700px; font-family: "Gotham Pro Bold";'>Индивидуальные</span>  
                  заявки подаются через форму регистрации на сайте, 
                  <span style='font-weight: 700px; font-family: "Gotham Pro Bold";'>коллективные</span> 
                  — отправляются на две почты:
                  <a href="mailto:zao@mosgorsport.ru" style='text-decoration: underline; text-decoration-thickness: 1px'>zao@mosgorsport.ru</a> 
                  и
                  <a href="mailto:mosskater@yandex.ru" style='text-decoration: underline; text-decoration-thickness: 1px'>mosskater@yandex.ru</a> 
                  (шаблон в <span onClick="window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })" style="text-decoration: underline; text-decoration-thickness: 1px; cursor: pointer">Положении</span>).</div>
                </div>
                <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                  <span style='margin-right: 5px'>2. </span>
                  <div>
                    <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>Собрать пакет документов (оригиналы):</div>
                    <ul style="margin-left: 30px;">
                      <li style='margin-bottom: 5px; color: white' data-mce-style='margin-bottom: 5px'>паспорт или свидетельство о рождении;</li>
                      <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис ОМС или ДМС;</li>
                      <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис страхования жизни и здоровья от несчастных случаев, действительный на день соревнования;</li>
                      <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>медицинское заключение о допуске к спортивным соревнованиям по форме 1144-н;</li>
                    </ul>
                  </div>
                </div>
                <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                  <span style='margin-right: 5px'>3. </span>
                  <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>Предоставить документы в зоне регистрации перед </br> началом соревнований.</div>
                </div>
                <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                  <span style='margin-right: 5px'>4. </span>
                  <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>На старт! Желаем успехов!</div>
                </div>
              </div>`,
            }}
          />
          <Stack
            sx={{
              width: "100%",
              maxHeight: "66px",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Gotham Pro Bold",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "23px",
                color: "white",
              }}
            >
              Рядом с катком есть пункт проката.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Gotham Pro Light",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "19.14px",
                color: "white",
                textAlign: "center",
              }}
            >
              Для участия в соревнованиях подойдут любые модели коньков
              (конькобежные, хоккейные, фигурные и т.д.)
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: "Gotham Pro Regular",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "normal",
              color: "white",
            }}
          >
            *для участия в мастер-классе не нужны справки, достаточно только
            регистрации
          </Typography>
        </Stack>
        <Box
          sx={{
            position: "absolute",
            bottom: "2%",
            right: "3%",
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
      </Box>
    </Container>
  ) : (
    <Box sx={{ mt: "32px", width: "100%" }}>
      <Stack sx={{ px: "5px" }}>
        <Header isMobile={isMobile} text="КАК ПРИНЯТЬ УЧАСТИЕ" />
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(/images/backgrounds/mobile/tutorBg.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "760px",
              width: "100%",
              mt: "32px",
            }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "100%",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={1}
            >
              <Box
                sx={{
                  fontFamily: "Gotham Pro Light",
                  fontSize: "16px",
                  lineHeight: isSmaller ? "20px" : "17px",
                  fontWeight: 400,
                  color: "white",
                  width: "85%",
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                  <div>
                    <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px;'>
                      <span style='margin-right: 5px'>1. </span>
                      <div>Зарегистрироваться 
                      <span style='font-weight: 700px; font-family: "Gotham Pro Bold"; text-decoration-skip-ink: none; text-decoration: underline; text-decoration-thickness: 1px' data-mce-style='font-weight: 700px; font-family: "Gotham Pro Bold"; text-decoration-skip-ink: none; text-decoration: underline; text-decoration-thickness: 1px'>до 1 февраля</span> 
                      включительно. 
                      <span style='font-weight: 700px; font-family: "Gotham Pro Bold";'>Индивидуальные</span>  
                      заявки подаются через форму регистрации на сайте, 
                      <span style='font-weight: 700px; font-family: "Gotham Pro Bold";'>коллективные</span> 
                      — отправляются на две почты:
                      <a href="mailto:zao@mosgorsport.ru" style='text-decoration: underline; text-decoration-thickness: 1px'>zao@mosgorsport.ru</a> 
                      и
                      <a href="mailto:mosskater@yandex.ru" style='text-decoration: underline; text-decoration-thickness: 1px'>mosskater@yandex.ru</a> 
                      (шаблон в <span onClick="window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })" style="text-decoration: underline; text-decoration-thickness: 1px; cursor: pointer">Положении</span>).</div>
                    </div>
                    <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                      <span style='margin-right: 5px'>2. </span>
                      <div>
                        <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>Собрать пакет документов (оригиналы):</div>
                        <ul style="margin-left: 30px;">
                          <li style='margin-bottom: 5px; color: white' data-mce-style='margin-bottom: 5px'>паспорт или свидетельство о рождении;</li>
                          <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис ОМС или ДМС;</li>
                          <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>полис страхования жизни и здоровья от несчастных случаев, действительный на день соревнования;</li>
                          <li style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>медицинское заключение о допуске к спортивным соревнованиям по форме 1144-н;</li>
                        </ul>
                      </div>
                    </div>
                    <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                      <span style='margin-right: 5px'>3. </span>
                      <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>Предоставить документы в зоне регистрации перед </br> началом соревнований.</div>
                    </div>
                    <div style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px' data-mce-style='display: flex; justify-content: flex-start; align-items: flex-start; margin-bottom: 5px'>
                      <span style='margin-right: 5px'>4. </span>
                      <div style='margin-bottom: 5px' data-mce-style='margin-bottom: 5px'>На старт! Желаем успехов!</div>
                    </div>
                  </div>`,
                }}
              />
              <Stack
                sx={{
                  width: "80%",
                  maxHeight: "93px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px dashed #FFFFFF",
                  py: isSmaller ? "5px" : "0px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontWeight: 700,
                    fontSize: isSmaller ? "24px" : "18px",
                    lineHeight: "23px",
                    color: "white",
                    textAlign: "center",
                    textIndent: "6px",
                  }}
                >
                  Рядом с катком есть пункт проката.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Light",
                    fontWeight: 400,
                    fontSize: isSmaller ? "16px" : "14px",
                    lineHeight: "15.31px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Для участия в соревнованиях подойдут любые модели коньков
                  (конькобежные, хоккейные, фигурные и т.д.)
                </Typography>
              </Stack>
              <Typography
                sx={{
                  width: "80%",
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "normal",
                  color: "white",
                }}
              >
                *для участия в мастер-классе не нужны справки, достаточно только
                регистрации
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              backgroundImage: "url(/images/backgrounds/mobile/tutorBgB.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "700px",
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
            backgroundImage:
              "url(/images/backgrounds/mobile/tutor-bottomBg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "420px",
            mt: "-50px",
            width: "100%",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              position: "absolute",
              bottom: "-30px",
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
export default Tutorial;
