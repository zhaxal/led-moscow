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
				<Programs isMobile={matches} />
				<Participants isMobile={matches} />
				<Master isMobile={matches} />
				<Tutorial isMobile={matches} />
				<Gallery
					isMobile={matches}
					items={[
						"https://s283vlx.storage.yandex.net/rdisk/a141d175a1f7872100979ffd3b833ee9bba2776b6a53a082dae894c7ab322481/65c16a7a/DLB75oB3qSBSBTBeaKXGs4VQI4fdOSV0u3VjT7jBbUw97QasxobYfPmWO6S379Lj5-G1n6ffXXJTtHI0OJL9Nw==?uid=0&filename=24-02-03_09-25-53_ME6_1402.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=1016611&hid=93f2bf067103161a722b015213b36085&media_type=image&tknv=v2&etag=72865d85dd399d4a7d6266d9ea409f24&rtoken=hbCkvlkkSN3b&force_default=no&ycrid=na-f28ca2add645965e6f592ba531e4a20e-downloader5h&ts=610aa8af41280&s=f17391490dd4d706755e848297014e52f469376863e3988a6a3c54de68662ed8&pb=U2FsdGVkX196Fn18iL3mJxVyN7AjsyawkwI2Wyjst38mV6VPToXrZZ3Ac5GeePZPndUZxtVQ0BQEYzhJfU6pghHjNKPe0EcJDhH5RZRzOQI",
						"https://s62vlx.storage.yandex.net/rdisk/ff80ec7e3f251342ccceef39f465f84dd78565eacb17cba5d56872b2319200a9/65c16e2d/DLB75oB3qSBSBTBeaKXGs2ZyFuGI434YfToN39NOsYFucUKkLeLKjMDsetxPjDRYl-9iXnCbH1a823TkQKS4Ig==?uid=0&filename=24-02-03_09-29-50_ME1_2778.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=984554&hid=f0cc167ae90348f4871da9800f4c03e2&media_type=image&tknv=v2&etag=b0f708bcea8b5dbf825612f4c52d296f&rtoken=HpuZmVCuBYE7&force_default=no&ycrid=na-acf38ca088ae40298818cebdd2c90568-downloader23f&ts=610aac3662540&s=3f2eab57f4d3817d3eb82b5e04cd2afd05c64c3729234457497f301c769f2862&pb=U2FsdGVkX19Ntgv_jReMtZFdHxHPGf0w3vU8FgdvgFHyTNU3M7WS4FKZWWFnPxH8jNjDtd4LUzLYTBiUhFjErHwvu4g67OTYRI2PrHNcQK0",
						"https://s62vlx.storage.yandex.net/rdisk/ff80ec7e3f251342ccceef39f465f84dd78565eacb17cba5d56872b2319200a9/65c16e2d/DLB75oB3qSBSBTBeaKXGs2ZyFuGI434YfToN39NOsYFucUKkLeLKjMDsetxPjDRYl-9iXnCbH1a823TkQKS4Ig==?uid=0&filename=24-02-03_09-29-50_ME1_2778.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=984554&hid=f0cc167ae90348f4871da9800f4c03e2&media_type=image&tknv=v2&etag=b0f708bcea8b5dbf825612f4c52d296f&rtoken=HpuZmVCuBYE7&force_default=no&ycrid=na-acf38ca088ae40298818cebdd2c90568-downloader23f&ts=610aac3662540&s=3f2eab57f4d3817d3eb82b5e04cd2afd05c64c3729234457497f301c769f2862&pb=U2FsdGVkX19Ntgv_jReMtZFdHxHPGf0w3vU8FgdvgFHyTNU3M7WS4FKZWWFnPxH8jNjDtd4LUzLYTBiUhFjErHwvu4g67OTYRI2PrHNcQK0",
						"https://s62vlx.storage.yandex.net/rdisk/ff80ec7e3f251342ccceef39f465f84dd78565eacb17cba5d56872b2319200a9/65c16e2d/DLB75oB3qSBSBTBeaKXGs2ZyFuGI434YfToN39NOsYFucUKkLeLKjMDsetxPjDRYl-9iXnCbH1a823TkQKS4Ig==?uid=0&filename=24-02-03_09-29-50_ME1_2778.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=984554&hid=f0cc167ae90348f4871da9800f4c03e2&media_type=image&tknv=v2&etag=b0f708bcea8b5dbf825612f4c52d296f&rtoken=HpuZmVCuBYE7&force_default=no&ycrid=na-acf38ca088ae40298818cebdd2c90568-downloader23f&ts=610aac3662540&s=3f2eab57f4d3817d3eb82b5e04cd2afd05c64c3729234457497f301c769f2862&pb=U2FsdGVkX19Ntgv_jReMtZFdHxHPGf0w3vU8FgdvgFHyTNU3M7WS4FKZWWFnPxH8jNjDtd4LUzLYTBiUhFjErHwvu4g67OTYRI2PrHNcQK0",
						"https://s62vlx.storage.yandex.net/rdisk/ff80ec7e3f251342ccceef39f465f84dd78565eacb17cba5d56872b2319200a9/65c16e2d/DLB75oB3qSBSBTBeaKXGs2ZyFuGI434YfToN39NOsYFucUKkLeLKjMDsetxPjDRYl-9iXnCbH1a823TkQKS4Ig==?uid=0&filename=24-02-03_09-29-50_ME1_2778.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=984554&hid=f0cc167ae90348f4871da9800f4c03e2&media_type=image&tknv=v2&etag=b0f708bcea8b5dbf825612f4c52d296f&rtoken=HpuZmVCuBYE7&force_default=no&ycrid=na-acf38ca088ae40298818cebdd2c90568-downloader23f&ts=610aac3662540&s=3f2eab57f4d3817d3eb82b5e04cd2afd05c64c3729234457497f301c769f2862&pb=U2FsdGVkX19Ntgv_jReMtZFdHxHPGf0w3vU8FgdvgFHyTNU3M7WS4FKZWWFnPxH8jNjDtd4LUzLYTBiUhFjErHwvu4g67OTYRI2PrHNcQK0",
						"https://s62vlx.storage.yandex.net/rdisk/ff80ec7e3f251342ccceef39f465f84dd78565eacb17cba5d56872b2319200a9/65c16e2d/DLB75oB3qSBSBTBeaKXGs2ZyFuGI434YfToN39NOsYFucUKkLeLKjMDsetxPjDRYl-9iXnCbH1a823TkQKS4Ig==?uid=0&filename=24-02-03_09-29-50_ME1_2778.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=984554&hid=f0cc167ae90348f4871da9800f4c03e2&media_type=image&tknv=v2&etag=b0f708bcea8b5dbf825612f4c52d296f&rtoken=HpuZmVCuBYE7&force_default=no&ycrid=na-acf38ca088ae40298818cebdd2c90568-downloader23f&ts=610aac3662540&s=3f2eab57f4d3817d3eb82b5e04cd2afd05c64c3729234457497f301c769f2862&pb=U2FsdGVkX19Ntgv_jReMtZFdHxHPGf0w3vU8FgdvgFHyTNU3M7WS4FKZWWFnPxH8jNjDtd4LUzLYTBiUhFjErHwvu4g67OTYRI2PrHNcQK0",
					]}
				/>
				<Footer isMobile={matches} />
			</Box>
		</>

		// <Alert severity="info" variant="filled">
		// <AlertTitle>Сайт в разработке</AlertTitle>
		// </Alert>
	);
}
