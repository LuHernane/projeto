import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import NavBar from "../../componentes/NavBar";

export default function Home() {
  return (
    <Box bg="gray" h="container.xl" w="100%">
      <NavBar />
      <Stack align={"center"} mt="25px">
        <h1> my home</h1>
        <h1> my home</h1>
        <h1> my home</h1>
        <h1> my home</h1>
      </Stack>
    </Box>
  );
}
