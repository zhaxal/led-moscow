import Cover from "../components/cover";
import { Box, Container, Stack } from "@mui/material";
import About from "components/about";
import Programs from "components/programs";
import Participants from "components/participants";
import Tutorial from "components/tutorial";

export default function Home() {
  return (
    <Box>
      <Cover />
      <About />
      <Programs />
      <Participants />
      <Tutorial />
    </Box>
  );
}
