import {
  Box,
  Button,
  HStack,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { array } from "../arrays";

// console.log(array);
export default function Home() {
  const [id, setId] = useState<number | string>();

  function consulta() {
    const result = array.findIndex((item) => item.id == id);
    if (result == -1) {
      return alert("Item not found");
    }
    array[result].qtReturn = array[result].qtReturn + 1;
    setId("");
    // alert(JSON.stringify(array[result]));
  }
  function retorno() {
    const result1 = array.findIndex((item) => item.id == id);
    if (result1 == -1) {
      return alert("Id not found ");
    }
    if (array[result1].qtReturn == 0) {
      return alert("Sem retornos disponiveis");
    }
    array[result1].qtReturn = array[result1].qtReturn - 1;
    setId("");
    //  JSON.stringify(array[result1]);
  }
  return (
    <Box bg="gray" h="container.xl" w="100%">
      <HStack display={"contents"} alignContent="center">
        <Input
          htmlSize={5}
          width="auto"
          onChange={(e) => setId(e.target.value)}
          value={String(id)}
        />
        <Button onClick={consulta}>Consulta</Button>
        <Button onClick={retorno}>Retorno</Button>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th border="1px">ID</Th>
                <Th border="1px">Nome</Th>
                <Th border="1px">Retorno</Th>
              </Tr>
            </Thead>
            <Tbody>
              {array.map((item: any) => (
                <Tr>
                  <Td border="1px">{item.id}</Td>
                  <Td border="1px">{item.nome}</Td>
                  <Td border="1px">{item.qtReturn}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </HStack>
    </Box>
  );
}
