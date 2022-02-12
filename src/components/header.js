import {
  Text,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

import { useLang } from "../context/langContext";
import { IntlProvider, FormattedMessage } from "react-intl";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white");
  const { lang } = useLang();

  const messages = {
    "tr-TR": {
      desc: "Biz anime kızlarını seven 4 arkadaşız. Beraber oyun oynayıp boş espirilere sabaha kadar güleriz",
      discord: "Bizimle takılmak istersen",
      err: "ÇABUK SİYAH TEMAYA GERİ DÖN!!",
    },
    "en-US": {
      desc: "We're 4 friends who love anime girls. We play games together and laugh at stupid jokes.",
      discord: "If you want to hang with us",
      err: "GO BACK TO THE DARK THEME!!",
    },
  };

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
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

        <FormattedMessage id="desc" />

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
    </IntlProvider>
  );
}

export default Header;
