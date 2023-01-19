import Cover from "../components/cover";
import { Box, Container } from "@mui/material";
import About from "components/about";
import Programs from "components/programs";

export default function Home() {
  return (
    <Box>
      <Cover />
      <About />
      <Programs />
    </Box>
  );
}
