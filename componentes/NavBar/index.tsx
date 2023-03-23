import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Menu from "../../src/menu";

export default function NavBar() {
  return (
    <Box bg="gray" display={"flex"} flex={"1"} h={38} boxShadow="md">
      <Menu />
      <HStack
        justifySelf={"center"}
        ml={"auto"}
        spacing={20}
        mr="10%"
        flex={"1"}
      >
        <InputGroup variant="outlined" width="lg" m={"auto"}>
          <Input placeholder="Pesquisar Itens"></Input>
          <InputRightElement children={<SearchIcon color="black" />} />
        </InputGroup>
      </HStack>
    </Box>
  );
}
