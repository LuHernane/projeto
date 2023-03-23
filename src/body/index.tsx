import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { AiOutlineComment } from "react-icons/ai";
import { IoIosThumbsUp, IoMdShareAlt } from "react-icons/io";

export default function Body() {
  return (
    <Card
      bg="gray"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      m="auto"
      mt="60px"
      maxW="lg"
    >
      <CardHeader>
        <Flex flex={"1"} gap={4} alignItems="center">
          <Avatar
            name="Test"
            src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/03/wallpaper-xbox-one-PS4.jpg"
          />
          <Box>
            <Heading size="sm">TESTE</Heading>
            <Text> aahhh ehhhhh</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          Paisagens são admiradas em todos os cantos do mundo, principalmente
          quando a natureza proporciona a própria. Paisagens naturais são
          esculturas da natureza, montes, árvores, plantas que deixam nosso
          planeta cada vez mais bonito, apesar de tanta devastação do homem.
          Papéis de parede que dão a sensação de liberdade, de paz e alegria.
          Vamos mostrar vários wallpaper para você admirar, colocar no plano de
          fundo do seu computador e compartilhar com os amigos.
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src="http://2.bp.blogspot.com/-p8WUJQwzj5A/T7BTP05XF-I/AAAAAAAACZg/m-_c4aSKLj8/s1600/wallpaper-paisagem.jpg"
        alt="Chakra UI"
      />
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<IoIosThumbsUp />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<AiOutlineComment />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<IoMdShareAlt />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
