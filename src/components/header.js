import {
  Text,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { FormattedMessage } from "react-intl";

function Header() {
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
      <Box textAlign={"center"}>
        <FormattedMessage id="desc" />
      </Box>
      <Button
        color="Black"
        variant="link"
        onClick={toggleColorMode}
        mt="3"
        fontSize={"2xl"}
        display={colorMode === "light" ? "box" : "none"}
      >
        <FormattedMessage id="err" />
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
        <a href="https://discord.gg/VrwJWNSJfA">
          <FormattedMessage id="discord" />
        </a>
        
      </Button>
    </Box>
  );
}

export default Header;
