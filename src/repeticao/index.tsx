import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
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
  const [newId, setNewId] = useState<number>();
  const [produto, setProduto] = useState<productprops[]>([
    { id: 1, produto: "caderno", quantidade: 7 },
    { id: 2, produto: "lapis", quantidade: 25 },
    { id: 3, produto: "folha", quantidade: 50 },
  ]);

  const [busca, setBusca] = useState<string>("");
  const buscaLowercase = busca.toLowerCase();
  const buscaProduct = produto.filter((produto) =>
    produto.produto.toLowerCase().includes(buscaLowercase)
  );
  // function editar() {
  //   const edita = [...produto];
  //   const;
  // }
  console.log(newId);
  function apagar(idDel: number) {
    const apagaItens = [...produto];
    const index = apagaItens.findIndex((produto) => produto.id === idDel);
    if (index === -1) {
      return alert("Não encontrado");
    }
    apagaItens.splice(index, 1);
    return setProduto(apagaItens);
  }
  function adiciona(): void {
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

  function edit(idProps: number) {
    const find = produto?.find((item) => item.id === idProps);
    if (!find) {
      return alert("Product not found!");
    }
    if (!newId) {
      return alert("informe a quantidade");
    }

    const updatedItens = produto.map((item) => {
      if (item.id === idProps) {
        const newQuantity = newId;
        return { ...item, id: newQuantity };
      }

      return item;
    });
    setProduto(updatedItens);

    alert(JSON.stringify(produto));
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
    <Box bg="gray.400" h="container.lg">
      <Stack direction="row" spacing={4} align="center">
        <HStack spacing={4}>
          <Button type="submit" onClick={adiciona}>
            Entrada
          </Button>
          <Button type="submit" onClick={saida}>
            Saída
          </Button>
        </HStack>
        <HStack spacing={4}>
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
          <InputGroup variant="outlined" width="lg" m={"auto"}>
            <Input
              placeholder="Pesquisar Itens"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            ></Input>

            <InputRightElement children={<SearchIcon color="black" />} />
          </InputGroup>
        </HStack>
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
                  <Td border="1px">
                    <Input
                      onChange={(e) => setNewId(+e.target.value)}
                      defaultValue={item.id}
                    />
                  </Td>
                  <Td border="1px">
                    <Input defaultValue={item.produto} />
                  </Td>
                  <Td border="1px">{item.quantidade}</Td>
                  <Td border="1px">
                    {" "}
                    <ButtonGroup border="1px, full" spacing={5}>
                      <Button onClick={() => apagar(item.id)}>Del</Button>{" "}
                      <Button onClick={() => edit(item.id)}>Edit</Button>{" "}
                    </ButtonGroup>
                  </Td>
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
