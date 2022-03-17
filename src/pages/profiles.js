import { useMemo } from "react";
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
  useColorModeValue,
  ListItem,
  Tooltip,
  Accordion,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaSteam,
  FaTwitter,
  FaGithub,
  FaTwitch,
} from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { FormattedMessage } from "react-intl";
import { useLang } from "../context/langContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import CustomSpinner from "../components/spinner";
import { motion } from "framer-motion";

function Profiles() {
  const { lang } = useLang();
  const { id } = useParams();

  const textColor = useColorModeValue("black", "white");
  const titleColor = useColorModeValue("yellow.500", "yellow.300");
  const btnBg = useColorModeValue("gray.900", "gray.50");
  const btnColor = useColorModeValue("white", "gray.900");

  const endpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;
  const MEMBER_QUERY = useMemo(() => {
    return `
  {
    members {
      link
      animeGirls
      avatar
      desc
      descEn
      detail
      detailEn
      name
      sm
      tag
      bestSeries
      bestGames
      bestMovies
      bestAnime
    }
  }
`;
  }, []);

  const { data, isLoading, error } = useQuery("launches", () => {
    return axios({
      url: endpoint,
      method: "POST",
      data: {
        query: MEMBER_QUERY,
      },
    }).then((response) => response.data.data);
  });

  if (isLoading) return <CustomSpinner />;
  if (error) return <pre>{error.message}</pre>;

  const member = data.members.find((item) => item.link === id);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 20 }}
      >
        <Flex data-aos="fade-down">
          <Box>
            <Breadcrumb
              display={{ base: "none", md: "block" }}
              spacing="4px"
              mb={4}
              separator={<AiOutlineRight color="gray.500" />}
            >
              <BreadcrumbItem>
                <Link to="/">
                  <Button variant={"link"}>Home</Button>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Button variant={"link"}>{member.name}</Button>
              </BreadcrumbItem>
            </Breadcrumb>
            <Image
              rounded={"md"}
              alt={"user image"}
              src={member.avatar}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }} data-aos="fade-up"  backdropFilter={"blur(4px)"}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              color={textColor}
            >
              {member.name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={"gray.600"} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"} color={textColor}>
                {lang === "tr-TR" ? member.desc : member.descEn}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={titleColor}
                fontWeight={"500"}
                mb={"4"}
              >
                <FormattedMessage id="title" />
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2} color={textColor}>
                  {lang === "tr-TR"
                    ? member.detail.map((item, index) => (
                        <ListItem key={index}>{item.itemL}</ListItem>
                      ))
                    : member.detailEn.map((item, index) => (
                        <ListItem key={index}>{item.itemL}</ListItem>
                      ))}
                </List>
                <List spacing={2} color={textColor}>
                  {lang === "tr-TR"
                    ? member.detail.map((item, index) => (
                        <ListItem key={index}>{item.itemR}</ListItem>
                      ))
                    : member.detailEn.map((item, index) => (
                        <ListItem key={index}>{item.itemR}</ListItem>
                      ))}
                </List>
              </SimpleGrid>
            </Box>
          </Stack>
          <Stack>
            <Accordion allowToggle>
              <AccordionItem borderColor={"gray.600"}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <FormattedMessage id="title_2" />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List spacing={2} color={textColor}>
                      {member.animeGirls.map((item, index) => (
                        <ListItem key={index}>{item.itemL}</ListItem>
                      ))}
                    </List>
                    <List spacing={2} color={textColor}>
                      {member.animeGirls.map((item, index) => (
                        <ListItem key={index}>{item.itemR}</ListItem>
                      ))}
                    </List>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderColor={"gray.600"}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <FormattedMessage id="bestSeries" />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Tabs variant="enclosed" borderColor={textColor}>
                    <TabList>
                      {member.bestGames.length > 0 && (
                        <Tab>
                          <FormattedMessage id="series" />
                        </Tab>
                      )}
                      {member.bestGames.length > 0 && (
                        <Tab>
                          <FormattedMessage id="games" />
                        </Tab>
                      )}
                      {member.bestAnime.length > 0 && (
                        <Tab>
                          <FormattedMessage id="anime" />
                        </Tab>
                      )}
                      {member.bestMovies.length > 0 && (
                        <Tab>
                          <FormattedMessage id="movie" />
                        </Tab>
                      )}
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        <List color={textColor}>
                          {member.bestSeries.map((item, index) => (
                            <div key={index}>
                              <ListItem>{item}</ListItem>
                            </div>
                          ))}
                        </List>
                      </TabPanel>
                      <TabPanel>
                        <List color={textColor}>
                          {member.bestGames.map((item, index) => (
                            <div key={index}>
                              <ListItem>{item}</ListItem>
                            </div>
                          ))}
                        </List>
                      </TabPanel>
                      <TabPanel>
                        <List color={textColor}>
                          {member.bestAnime.map((item, index) => (
                            <div key={index}>
                              <ListItem>{item}</ListItem>
                            </div>
                          ))}
                        </List>
                      </TabPanel>
                      <TabPanel>
                        <List color={textColor}>
                          {member.bestMovies.map((item, index) => (
                            <div key={index}>
                              <ListItem>{item}</ListItem>
                            </div>
                          ))}
                        </List>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems={"center"}
            justifyContent="center"
            mb={6}
          >
            {member.sm.website && (
              <Tooltip
                hasArrow
                label="Website"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.website}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <BiWorld size={"30px"} />
                </Text>
              </Tooltip>
            )}
            {member.sm.twitch && (
              <Tooltip
                hasArrow
                label="Twitch"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.twitch}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaTwitch size={"30px"} />
                </Text>
              </Tooltip>
            )}
            {member.sm.github && (
              <Tooltip
                hasArrow
                label="Github"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.github}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaGithub size={"30px"} />
                </Text>
              </Tooltip>
            )}
            {member.sm.instagram && (
              <Tooltip
                hasArrow
                label="Instagram"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.instagram}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaInstagram size={"30px"} />
                </Text>
              </Tooltip>
            )}
            {member.sm.steam && (
              <Tooltip
                hasArrow
                label="Steam"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.steam}
                  mr="6"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaSteam size={"30px"} />
                </Text>
              </Tooltip>
            )}
            {member.sm.twitter && (
              <Tooltip
                hasArrow
                label="Twitter"
                bg="gray.300"
                color="black"
                borderRadius={"md"}
              >
                <Text
                  as={"a"}
                  href={member.sm.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  _hover={{ color: "yellow.300" }}
                  transition="all 0.3s"
                >
                  <FaTwitter size={"30px"} />
                </Text>
              </Tooltip>
            )}
          </Box>
          <Link to="/">
            <motion.div whileTap={{ scale: 0.8 }}>
              <Button
                rounded={"none"}
                w={"full"}
                size={"lg"}
                py={"7"}
                bg={btnBg}
                color={btnColor}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                mb={{ base: "6", md: "0" }}
              >
                <FormattedMessage id="home_btn" />
              </Button>
            </motion.div>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default Profiles;
