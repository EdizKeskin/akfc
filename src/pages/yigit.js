import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSteam, FaTwitter } from "react-icons/fa";

function Yigit() {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src="https://media.discordapp.net/attachments/852594392833327146/938770781436014622/Anime_iconsby_Rasla_.jpeg?width=559&height=559"
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Yiğithan Uğur
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={"gray.600"}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>
              Tarihin en iyi oyuncusu. En sevdiği oyun devour.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"yellow.300"}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                ÖZELLİKLER
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Pro gamer</ListItem>
                  <ListItem>Adam</ListItem>{" "}
                  <ListItem>Oyunda götünüzü taşır</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Paslı kelebeği var</ListItem>
                  <ListItem>LoL elmas</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems={"center"}
            justifyContent="center"
            mb={6}
          >
            <Text
              as={"a"}
              href="https://www.instagram.com/yigitohka"
              mr="6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={"30px"} className="icon" />
            </Text>
            <Text
              as={"a"}
              href="https://steamcommunity.com/id/Tohka7"
              mr="6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSteam size={"30px"} className="icon" />
            </Text>
            <Text
              as={"a"}
              href="https://twitter.com/liselinutella"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={"30px"} className="icon" />
            </Text>
          </Box>
          <Link to="/">
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={"gray.50"}
              color={"gray.900"}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Ana Sayfa
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Yigit;
