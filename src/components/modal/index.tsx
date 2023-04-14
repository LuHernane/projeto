import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function InitialFocus({ data }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState(data.produto);
  const [qtd, setQtd] = useState(+data.quantidade);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const toast = useToast();

  function edita() {
    const find = product.find((item: any) => item.id === data.id);

    toast({
      position: "top",
      title: "",
      description: "Produtos alterados com sucesso.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
  // function edita(): void {
  //   if () {

  // }

  return (
    <>
      <Button onClick={onOpen}>Entrar</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Página de Edição</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl display={"flex"} flex="1">
              <FormLabel>Editar</FormLabel>

              <Input
                onChange={(e) => setProduct(e.target.value)}
                placeholder="Produto"
                defaultValue={product}
              />
              <Input
                onChange={(e) => setQtd(+e.target.value)}
                placeholder="Quantidade"
                defaultValue={+qtd}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={edita}>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
