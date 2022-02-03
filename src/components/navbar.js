import { Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function Navbar() {
  return (
    <Box
      justifyContent="center"
      alignItems={"center"}
      display="flex"
      py={10}
      flexDirection="column"
    >
      <Text
        as={"h1"}
        fontSize={"4xl"}
        fontWeight={"extrabold"}
        letterSpacing={"10px"}
      >
        AKFC
      </Text>
      <Text fontSize={"lg"} fontWeight={"medium"}>
        Biz anime kızlarına tapan 4 arkadaşız
      </Text>

      <Button
        variant="link"
        fontSize={"md"}
        color={"gray.500"}
        fontWeight={"medium"}
        mb="-10"
        mt="10"
        textAlign={"center"}
        leftIcon={<FaDiscord />}
      >
        <a href="https://discord.gg/VrwJWNSJfA">Bizimle takılmak istersen</a>
      </Button>
    </Box>
  );
}

export default Navbar;
