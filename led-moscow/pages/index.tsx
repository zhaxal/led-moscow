import Cover from "../components/cover";
import { Box, Container } from "@mui/material";
import About from "components/about";

export default function Home() {
  return (
    <Box>
      <Cover />
      <About />
    </Box>
  );
}
