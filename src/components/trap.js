import React from "react";

import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Image,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

import { useLang } from "../context/langContext";
import { IntlProvider, FormattedMessage } from "react-intl";

function Trap() {
  const { isOpen, onOpen } = useDisclosure();
  const bg = useColorModeValue("white.100", "gray.900");
  const textColor = useColorModeValue("black", "white");
  const btnRef = React.useRef();

  const { lang } = useLang();

  const messages = {
    "tr-TR": {
      btn: "Sakın tıklama",
      err:"Tıklama yazmıştım :D"
    },
    "en-US": {
      btn: "Dont touch",
      err:"Told u :D"
    },
  };

  return (
    <IntlProvider messages={messages[lang]} locale={lang}>
      <Box position={"absolute"} bottom={"0"} right={"0"}>
        <Button
          ref={btnRef}
          colorScheme="gray"
          onClick={onOpen}
          variant="ghost"
          color={"gray.500"}
          size={"sm"}
        >
          <FormattedMessage id="btn" />
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="bottom"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor={bg}
          display="flex"
          justifyContent="center"
          alignContent="center"
          textAlign="center"
        >
          <DrawerHeader>
            <Box
              display="flex"
              justifyContent="center"
              alignContent="center"
              textAlign="center"
              flexDirection="column"
              color={textColor}
            >
              <p>
                <FormattedMessage id="err" />
              </p>
              <Center>
                <Image
                  src="https://media.discordapp.net/attachments/716334154589143097/939660252725526588/freddy-fazbear-five-nights-at-freddys.gif"
                  height="20%"
                  width="20%"
                  alt="Dans Eden Freddy"
                />
              </Center>
            </Box>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </IntlProvider>
  );
}

export default Trap;
