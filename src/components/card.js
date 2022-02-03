import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaSteam, FaTwitter } from "react-icons/fa";

function Card(props) {
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={"gray.900"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        mx={6}
      >
        <Avatar
          size={"xl"}
          src={props.avatar}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}                                            
          border={"1px solid #eaeaea"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"} color="white">
          {props.name}
        </Heading>
        <Text fontWeight={600} fontSize={"xl"} color={"gray.500"} mb={4}>
          {props.tag}
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
            href={props.insta}
            mr="6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={"30px"} className="icon" />
          </Text>
          <Text
            as={"a"}
            href={props.steam}
            mr="6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSteam size={"30px"} className="icon" />
          </Text>
          <Text
            as={"a"}
            href={props.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={"30px"} className="icon" />
          </Text>
        </Box>

        <Link to={props.link}>
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
          >
            Detaylar
          </Button>
        </Link>
      </Box>
    </Center>
  );
}

export default Card;
