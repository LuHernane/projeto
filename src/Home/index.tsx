import { Box, Stack } from "@chakra-ui/react";

import NavBar from "../../componentes/NavBar";
import Body from "../body";

export default function Home() {
  return (
    <Box bg="gray" h="container.xl" w="100%" overflow={"clip"}>
      <NavBar />
      <Stack
        align={"center"}
        mt="25px"
        letterSpacing={7}
        fontWeight="extrabold"
      >
        <h1> my home</h1>
        <h1> my home</h1>
        <h1> my home</h1>
        <h1> my home</h1>
      </Stack>
      <Body />
    </Box>
  );
}
