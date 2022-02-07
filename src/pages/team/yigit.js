import { ListItem } from "@chakra-ui/react";

const list = [
  {
    itemL: "Pro gamer",
    itemR: "Paslı kelebeği var",
  },
  {
    itemL: "Adam",
    itemR: "LoL elmas",
  },
  {
    itemL: "Oyunda götünüzü taşır",
  },
];

function Yigit() {
  return (
    <Detail
      image="https://media.discordapp.net/attachments/852594392833327146/938770781436014622/Anime_iconsby_Rasla_.jpeg?width=559&height=559"
      name="Yiğithan Uğur"
      desc="Tarihin en iyi oyuncusu. En sevdiği oyun devour."
      listL={list.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={list.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      instagram="https://www.instagram.com/yigitohka/"
      steam="https://steamcommunity.com/id/Tohka7"
      twitter="https://twitter.com/liselinutella"
    />
  );
}

export default Yigit;
