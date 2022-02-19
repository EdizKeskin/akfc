import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSteam, FaTwitter } from "react-icons/fa";

import { FormattedMessage } from "react-intl";

function Card({ item }) {
  const bg = useColorModeValue("white.100", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const border = useColorModeValue("1px solid #CBD5E0", "none");
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={bg}
        boxShadow={"2xl"}
        border={border}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        mx={6}
      >
        <Avatar
          size={"xl"}
          src={item.avatar}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          border={"1px solid #eaeaea"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} color={textColor}>
          {item.name}
        </Heading>
        <Text fontWeight={600} fontSize={"xl"} color={"gray.500"} mb={4}>
          {item.tag}
        </Text>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems={"center"}
          justifyContent="center"
          mb={6}
        >
          <Text
            as={"a"}
            href={item.sm.instagram}
            mr="6"
            target="_blank"
            rel="noopener noreferrer"
            color={textColor}
            _hover={{ color: "teal.200" }}
            transition="all 0.3s"
          >
            <FaInstagram size={"30px"} />
          </Text>
          <Text
            as={"a"}
            href={item.sm.steam}
            mr="6"
            target="_blank"
            rel="noopener noreferrer"
            color={textColor}
            _hover={{ color: "teal.200" }}
            transition="all 0.3s"
          >
            <FaSteam size={"30px"} />
          </Text>
          <Text
            as={"a"}
            href={item.sm.twitter}
            target="_blank"
            rel="noopener noreferrer"
            color={textColor}
            _hover={{ color: "teal.200" }}
            transition="all 0.3s"
          >
            <FaTwitter size={"30px"} />
          </Text>
        </Box>

        <Link to={`team/${item.link}`}>
          <Button
            flex={1}
            colorScheme={"teal"}
            fontSize={"sm"}
            borderRadius="lg"
            alignItems={"center"}
            width={"full"}
            _focus={{
              bg: "gray.200",
            }}
            _hover={{
              transform: "translateY(2px)",
            }}
          >
            <FormattedMessage id="card_btn" />
          </Button>
        </Link>
      </Box>
    </Center>
  );
}

export default Card;
