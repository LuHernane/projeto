import {
  Box,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { array } from "../arrays";

// console.log(array);
export default function Home() {
  return (
    <Box bg="gray" h="container.xl" w="100%" overflow={"clip"}>
      {/* <pre>{JSON.stringify(array)}</pre> */}
      <HStack>
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
