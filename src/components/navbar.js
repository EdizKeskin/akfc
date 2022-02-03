import { Text, Box } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box justifyContent="center" alignItems={"center"} display="flex" py={10} flexDirection="column">
      <Text as={"h1"} fontSize={"4xl"} fontWeight={"extrabold"} letterSpacing={"10px"} >
        AKFC
      </Text>
      <Text as={"h1"} fontSize={"lg"} fontWeight={"medium"}>Biz anime kızlarına tapan 4 arkadaşız.</Text>
    </Box>
  );
}

export default Navbar;
