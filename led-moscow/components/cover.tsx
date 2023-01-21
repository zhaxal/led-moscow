import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import RegBtn from "./ui/regbtn";

const Cover = () => {
  return (
    <Container disableGutters maxWidth={"lg"}>
      <Box
        sx={{
          backgroundImage: "url(/images/backgrounds/cover.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "820px",
          width: "100%",
          pt: "14px",
          position: "relative"
        }}
      >
        <Stack
          sx={{
            alignItems: "flex-end",
            width: "100%",
          }}
          spacing={"111px"}
        >
          <Stack direction={"row"} spacing={"33px"} sx={{ mr: "4em" }}>
            <Box component={"img"} src={"/images/logos/departmentLogo.svg"} />
            <Stack direction={"row"} spacing={"12px"}>
              <Box component={"img"} src={"/images/logos/mossportLogo.svg"} />
              <Box
                component={"img"}
                src={"/images/logos/100mossportLogo.svg"}
              />
              <Box component={"img"} src={"/images/logos/skateLogo.svg"} />
            </Stack>
          </Stack>
          <Stack
            spacing={"35px"}
            sx={{
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mossport",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "32px",
                textAlign: "right",
                maxWidth: "325px",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(6.42deg, #B81D1D -9.7%, #BA1F1F 35.27%, #C12424 68.14%, #CC2D2D 97.06%, #DC3939 123.71%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%, #DD3A3A 125.3%)",
              }}
            >
              СОРЕВНОВАНИЯ ПО КОНЬКОБЕЖНОМУ СПОРТУ
            </Typography>
            <Box
              component={"img"}
              src={"/images/logos/iceLogo.svg"}
              alt={"iceLogo"}
              sx={{ maxWidth: "470px" }}
            />
            <Stack
              sx={{
                alignItems: "flex-end",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(/images/backgrounds/dateBg.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  minHeight: "53px",
                  width: "292px",
                  mr: "-50px",
                }}
              ></Box>
              <Stack
                sx={{
                  position: "absolute",
                  minHeight: "53px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Gotham Pro Regular",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "24px",
                    textAlign: "right",
                    color: "white",
                  }}
                >
                  4 ФЕВРАЛЯ
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: "Gotham Pro Regular",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "24px",
                  textAlign: "right",
                  whiteSpace: "pre-line",
                  textTransform: "uppercase",
                  mt: "10px"
                }}
              >
                {`СК «Лужники» 
              Каток «Южный полюс»`}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={{ position: "absolute", bottom: "5%", right: "3%", width: "543px" }}>
          <RegBtn onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  );
};

export default Cover;
