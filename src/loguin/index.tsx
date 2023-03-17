import { Box, Button, Stack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userId = "redmi";
  const passwordId = "note8";
  const toast = useToast();

  function Loguin() {
    if (userId === "redmi" && passwordId === "note8") {
      <a href=""></a>;
    } else {
      toast({
        position: "top",
        title: "error of login",
        description: "user or password wrong",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  return (
    <Box
      bg="blue.200"
      w="100%"
      h="100%"
      pos="fixed"
      minW={"100%"}
      minH={"100%"}
      display={"flex"}
      margin={"auto"}
    >
      <Stack
        m={"auto"}
        boxShadow={"xl"}
        shadow={"xl"}
        p="15px"
        borderRadius={15}
        spacing={4}
      >
        <input size={30} width="auto" />
        <input type="password" size={30} width="auto" />
        <Button> Entrar</Button>
      </Stack>
    </Box>
  );
}
