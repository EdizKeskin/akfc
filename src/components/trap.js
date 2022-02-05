import React from "react";

import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
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
        <DrawerContent bgColor={"gray.800"} display="flex" justifyContent="center" alignContent="center" textAlign="center">
          <DrawerHeader>
            <Box>
            <p>Tıklama yazmıştım :D</p>
            </Box>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Trap;
