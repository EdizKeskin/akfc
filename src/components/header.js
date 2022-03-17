import {
  Text,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { FormattedMessage } from "react-intl";
import { useLang } from "../context/langContext";
import Typewriter from "typewriter-effect";

function Header() {
  const { lang } = useLang();
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
  const desc =
    lang === "tr-TR"
      ? "Biz anime kızlarını seven 4 arkadaşız. Beraber oyun oynayıp boş espirilere sabaha kadar güleriz"
      : "We're 4 friends who love anime girls. We play games together and laugh at stupid jokes.";

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
        <Typewriter
          options={{
            autoStart: true,
            delay: 60,
            deleteSpeed: 0.05,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(desc)
              .pauseFor(1000)
              .start();
          }}
        />
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
        <Tooltip
          label={lang === "tr-TR" ? "Discord sunucumuz" : "Discord server"}
          bg="gray.300"
          color="black"
          borderRadius={"md"}
        >
          <a href="https://discord.gg/VrwJWNSJfA">
            <FormattedMessage id="discord" />
          </a>
        </Tooltip>
      </Button>
    </Box>
  );
}

export default Header;
