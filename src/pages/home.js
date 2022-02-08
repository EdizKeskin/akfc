import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import Trap from "../components/trap";
import User from "./users";

function Home() {
  return (
    <header className="App-header">
      <Navbar />
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
          <Card
            key={index}
            name={user.name}
            tag={user.tag}
            link={user.link}
            insta={user.sm.instagram}
            steam={user.sm.steam}
            twitter={user.sm.twitter}
            avatar={user.avatar}
          />
        ))}
      </Grid>
      <Trap/>
    </header>
  );
}

export default Home;
