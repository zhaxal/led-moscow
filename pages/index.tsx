/* eslint-disable @next/next/no-img-element */
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
import Master from "components/master";
import Family from "components/family";
import Gallery from "components/gallery";

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
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Box
        sx={{
          overflowX: "hidden",
        }}
      >
        <Script
          id="mailCounter"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var _tmr = window._tmr || (window._tmr = []);
					_tmr.push({id: "3283202", type: "pageView", start: (new Date()).getTime()});
					(function (d, w, id) {
						if (d.getElementById(id)) return;
						var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
						ts.src = "https://top-fwz1.mail.ru/js/code.js";
						var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
						if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
					})(document, window, "tmr-code");`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://top-fwz1.mail.ru/counter?id=3283202;js=na"
              style={{ position: "absolute", left: "-9999px" }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
        <Cover isMobile={matches} />
        <About isMobile={matches} />
        {/* <Programs isMobile={matches} />
        <Participants isMobile={matches} />
        <Master isMobile={matches} />
        <Tutorial isMobile={matches} />
        <Gallery
          isMobile={matches}
          items={[
            "https://placehold.co/400",
            "https://placehold.co/400",
            "https://placehold.co/400",
            "https://placehold.co/400",
            "https://placehold.co/400",
            "https://placehold.co/400",
          ]}
        />
        <Footer isMobile={matches} /> */}
      </Box>
    </>

    // <Alert severity="info" variant="filled">
    // <AlertTitle>Сайт в разработке</AlertTitle>
    // </Alert>
  );
}
