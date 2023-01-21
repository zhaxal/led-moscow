import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    headingMobile: React.CSSProperties;
    about: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    headingMobile?: React.CSSProperties;
    about?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    headingMobile: true;
    about: true;
  }
}

const theme = createTheme({
  typography: {
    heading: {
      fontSize: "64px",
      fontWeight: 400,
      lineHeight: "64px",
      fontFamily: "Mossport",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage:
        "linear-gradient(18.76deg, #1D71B8 -178.12%, #1F74BA -99.62%, #247DC1 -42.24%, #2D8DCC 8.26%, #39A3DC 54.79%, #3AA5DD 57.55%)",
    },
    headingMobile: {
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "36px",
      fontFamily: "Mossport",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage:
        "linear-gradient(18.76deg, #1D71B8 -178.12%, #1F74BA -99.62%, #247DC1 -42.24%, #2D8DCC 8.26%, #39A3DC 54.79%, #3AA5DD 57.55%)",
    },
    about: {
      fontSize: "20px",
      lineHeight: "20px",
      fontFamily: "Gotham Pro Light",
      color: "white",
    },
  },
  components: {
    MuiButton: {
      variants: [],
    },
  },
});

export default theme;
