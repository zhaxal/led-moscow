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

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    // <Box>
    //   <Cover isMobile={matches} />
    //   <About isMobile={matches}/>
    //   <Programs isMobile={matches}/>
    //   <Participants isMobile={matches}/>
    //   <Tutorial isMobile={matches}/>
    //   <Footer isMobile={matches}/>
    // </Box>

    <Alert severity="info" variant="filled">
      <AlertTitle>Сайт в разработке</AlertTitle>
    </Alert>
  );
}
