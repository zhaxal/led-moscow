import Cover from "../components/cover";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import About from "components/about";
import Programs from "components/programs";
import Participants from "components/participants";
import Tutorial from "components/tutorial";
import Footer from "components/footer";
import Script from "next/script";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Script
        id="id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(92219555, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
        `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/92219555"
            style={{ position: "absolute", left: "-9999px;" }}
            alt=""
          />
        </div>
      </noscript>
      <Box>
        <Cover isMobile={matches} />
        <About isMobile={matches} />
        <Programs isMobile={matches} />
        <Participants isMobile={matches} />
        <Tutorial isMobile={matches} />
        <Footer isMobile={matches} />
      </Box>
    </>

    // <Alert severity="info" variant="filled">
    //   <AlertTitle>Сайт в разработке</AlertTitle>
    // </Alert>
  );
}
