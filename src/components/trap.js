import React from "react";

import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Center
} from "@chakra-ui/react";

function Trap() {
  const { isOpen, onOpen } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box position={"absolute"} bottom={"0"} right={"0"}>
        <Button
          ref={btnRef}
          colorScheme="gray"
          onClick={onOpen}
          variant="ghost"
          color={"gray.500"}
          size={"sm"}
        >
          Sakın Tıklama
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        size="full"
        placement="bottom"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"gray.800"}>
          <DrawerHeader>
            <Center>
            Niye tıkladın kocaman sakın tıklama yazmışız :)
            </Center>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Trap;
