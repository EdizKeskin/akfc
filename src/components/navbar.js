import {
  Text,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
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
        color={textColor}
      >
        AKFC
      </Text>
      <Text fontSize={"lg"} fontWeight={"medium"} color={textColor} textAlign="center">
        Biz anime kızlarını seven 4 arkadaşız. Beraber oyun oynayıp boş
        espirilere sabaha kadar güleriz
      </Text>
      <IconButton
        size="sm"
        onClick={toggleColorMode}
        mt="3"
        icon={colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
        position={"absolute"}
        top={"5"}
        right={"5"}
      />

      <Button
        color="Black"
        variant="link"
        onClick={toggleColorMode}
        mt="3"
        fontSize={"2xl"}
        display={colorMode === "light" ? "box" : "none"}
      >
        Çabuk geri siyah temaya dön!!
      </Button>

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
