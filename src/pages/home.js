import React from "react";
import { Grid } from "@chakra-ui/react";
import Card from "../components/card";
import Navbar from "../components/navbar";

function Home() {
  const user = [
    {
      name: "Ediz Keskin",
      tag: "@Sharpness",
      link: "/ediz",
      insta: "https://www.instagram.com/sharpness_4/",
      steam: "https://steamcommunity.com/id/sharpness4",
      twitter: "https://twitter.com/sharpness_4",
      avatar: "https://media2.giphy.com/media/STx6D0t05pZEidimsU/giphy.gif",
    },
    {
      name: "İlke Eren Demirtaş",
      tag: "@Hypnamed",
      link: "/ilke",
      insta: "https://www.instagram.com/erenhypnamed/",
      steam: "https://steamcommunity.com/id/hypnamed",
      twitter: "https://twitter.com/hypnamed",
      avatar: "https://cdn.discordapp.com/attachments/877600152083374122/938766237071183912/LuffyLaugh.png",
    },
    {
      name: "Yiğithan Uğur",
      tag: "@Tohka",
      link: "/yigit",
      insta: "https://www.instagram.com/yigitohka",
      steam: "https://steamcommunity.com/id/Tohka7",
      twitter: "https://twitter.com/liselinutella",
      avatar: "https://media.discordapp.net/attachments/852594392833327146/938770781436014622/Anime_iconsby_Rasla_.jpeg?width=559&height=559",
    },
    {
      name: "Taha Aslan",
      tag: "@Sain7",
      link: "/taha",
      insta: "https://www.instagram.com/sainntt/",
      steam: "https://steamcommunity.com/id/safa61",
      twitter: "https://twitter.com/tahatja",
      avatar:"https://c.tenor.com/kX00C2557JgAAAAC/bleach.gif"
    },
  ];
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
        {user.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            tag={user.tag}
            link={user.link}
            insta={user.insta}
            steam={user.steam}
            twitter={user.twitter}
            avatar={user.avatar}
          />
        ))}
      </Grid>
    </header>
  );
}

export default Home;
