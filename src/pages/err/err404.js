import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function err404() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, red.400, red.500)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Sayfa Bulunamadı
      </Text>
      <Text color={"gray.500"} mb={6}>
        Sanırım yolunu kaybettin aşşağıdaki butona basarak ana sayfaya ışınlanabilirsin.
      </Text>
      <Link to="/">
        <Button colorScheme="red">Ana Sayfa</Button>
      </Link>
    </Box>
  );
}
export default err404;
