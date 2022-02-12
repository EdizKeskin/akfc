import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Card from "../components/card";
import Header from "../components/header";
import Trap from "../components/trap";
import User from "./users";

function Home() {
  return (
    <Box minh="100vh">
      <div data-aos="fade-up">
        <Header />
      </div>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        mt={"16"}
      >
        {User.map((user, index) => (
          <div key={index} data-aos="zoom-in-up">
            <Card item={user} />
          </div>
        ))}
      </Grid>

      <Trap />
    </Box>
  );
}

export default Home;
