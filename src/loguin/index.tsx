import { Box, Button, Input, Stack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useState } from "react";

export default function LoguinPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const userId = "redmi";
  const passwordId = "note8";
  const toast = useToast();

  function Loguin() {
    if (user === userId && password === passwordId) {
      location.href = "/main";
    } else {
      setPassword("");
      setUser("");
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
      bg="blackAlpha.700"
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
        <Input
          placeholder="User"
          width="auto"
          size={"lg"}
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <Input
          placeholder="Password"
          type="password"
          size={"lg"}
          width="auto"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button colorScheme="whatsapp" onClick={Loguin}>
          Entrar
        </Button>
      </Stack>
    </Box>
  );
}
