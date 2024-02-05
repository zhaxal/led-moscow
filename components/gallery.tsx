import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "./ui/header";
import GlrBtn from "./ui/glrbtn";

interface Props {
  isMobile: boolean;
  items: string[];
}

const Gallery = ({ isMobile, items }: Props) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  let displayedItems = items;
  if (isXs) {
    displayedItems = items.slice(0, 1);
  } else if (isSm) {
    displayedItems = items.slice(0, 4);
  } else if (isMd) {
    displayedItems = items.slice(0, 6);
  } else if (isLg) {
    displayedItems = items.slice(0, 6);
  }

  return (
    <Container maxWidth={"lg"} disableGutters sx={{ my: "82px" }}>
      <Box>
        <Header isMobile={isMobile} text="ГАЛЕРЕЯ" />
      </Box>
      <Grid container spacing={2} sx={{ mt: "80px" }}>
        {displayedItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundImage: `url(${item})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "300px",
                position: "relative",
              }}
            />
          </Grid>
        ))}
      </Grid>
      {!isMobile && (
        <Stack
          sx={{
            mt: "25px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GlrBtn
            onClick={() => {
              window
                .open("https://disk.yandex.ru/d/GLV6E83lsKqf9g", "_blank")
                ?.focus();
            }}
            isMobile={isMobile}
          />
        </Stack>
      )}

      {isMobile && (
        <Stack
          sx={{
            mt: "25px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "543px",
            }}
          >
            <GlrBtn
              onClick={() => {
                window
                  .open("https://disk.yandex.ru/d/GLV6E83lsKqf9g", "_blank")
                  ?.focus();
              }}
              isMobile={isMobile}
            />
          </Box>
        </Stack>
      )}
    </Container>
  );
};

export default Gallery;
