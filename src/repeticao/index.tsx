import {
  Box,
  Button,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

interface productprops {
  id: number;
  produto: string;
  quantidade: number;
}
export default function Reps() {
  const [id, setId] = useState<number>();
  const [quantidade, setQuantidade] = useState<number>();

  const [productName, setProductName] = useState<string>("");
  const [quantidadeProduct, setQuantidadeProduct] = useState<number>();
  const [idProduct, setIdProduct] = useState<number>();

  const [produto, setProduto] = useState<productprops[]>([
    { id: 1, produto: "caderno", quantidade: 7 },
  ]);

  function adiciona() {
    const find = produto?.find((item) => item.id === id);
    if (!find) {
      return alert("Product not found!");
    }
    if (!quantidade) {
      return alert("informe a quantidade");
    }

    const updatedItens = produto.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantidade + quantidade;
        return { ...item, quantidade: newQuantity };
      }
      return item;
    });
    setProduto(updatedItens);
  }
  function saida() {
    const find = produto?.find((item) => item.id === id);
    if (!find) {
      return alert("Product not found!");
    }

    if (!quantidade) {
      return alert("informe a quantidade");
    }

    if (find.quantidade < quantidade) {
      return alert("No have product!");
    }

    const removedItems = produto.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantidade - quantidade;

        return { ...item, quantidade: newQuantity };
      }
      return item;
    });
    setProduto(removedItems);
  }

  function novoProduto() {
    const find = produto?.find((item) => item.id === idProduct);
    if (find) {
      return alert("ID alreay exists!");
    }
    if (!productName || !quantidadeProduct || !idProduct) {
      return;
    }
    const findName = produto?.find((item) => item.produto === productName);
    if (findName) {
      const updatedItens = produto.map((item) => {
        if (item.id === findName.id) {
          const newQuantity = item.quantidade + quantidadeProduct;
          return { ...item, quantidade: newQuantity };
        }
        return item;
      });
      setProduto(updatedItens);
      return;
    }

    setProduto((old) => [
      ...old,
      {
        id: +idProduct,
        produto: productName,
        quantidade: quantidadeProduct,
      },
    ]);
  }

  return (
    <Box flex="1" bg="gray.400" h="container.lg">
      <Stack direction="row" spacing={4} align="center">
        <Button type="submit" onClick={adiciona}>
          Entrada
        </Button>
        <Button type="submit" onClick={saida}>
          Saída
        </Button>

        <Input
          placeholder="ID"
          htmlSize={5}
          width="auto"
          onBlur={(e) => setId(+e.target.value)}
        />
        <Input
          placeholder="Qtd"
          htmlSize={5}
          width="auto"
          onBlur={(e) => setQuantidade(+e.target.value)}
        />
      </Stack>
      <VStack align={"center"} p="10%">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Td border="1px">ID</Td>
                <Td border="1px">Produtos</Td>
                <Td border="1px">Quantidade</Td>
              </Tr>
            </Thead>
            <Tbody>
              {produto?.map((item: any) => (
                <Tr key={item.id}>
                  <Td border="1px">{item.id}</Td>
                  <Td border="1px">{item.produto}</Td>
                  <Td border="1px">{item.quantidade}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td border="1px">
                  <Input
                    placeholder="ID"
                    onBlur={(e) => setIdProduct(+e.target.value)}
                  />
                </Td>
                <Td border="1px">
                  <Input
                    placeholder="Produto"
                    onBlur={(e) => setProductName(e.target.value)}
                  />
                </Td>
                <Td border="1px">
                  <Input
                    placeholder="Quantidade"
                    onBlur={(e) => setQuantidadeProduct(+e.target.value)}
                  />
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Button type="submit" onClick={novoProduto}>
          {" "}
          ADD
        </Button>
      </VStack>
    </Box>
  );
}
