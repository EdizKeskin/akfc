import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";

const list = [
  {
    itemL: "Rocket Lig #1",
    itemR: "7 yıllık lol prosu",
  },
  {
    itemL: "Anime kızlı yastığı var",
    itemR: "Pc hocası facebook grubu obezi",
  },
  {
    itemL: "Has animeci",
    itemR: "Tiktok yıldızı",
  },
];

function Ilke() {
  return (
    <Detail
      image="https://cdn.discordapp.com/attachments/877600152083374122/938766237071183912/LuffyLaugh.png"
      name="Ilke Eren Demirtas"
      desc="Korsanlar Kralı Luffy'nin en yakın arkadaşı 3 anime kızıyla birden evli durumda."
      listL={list.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={list.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      website="http://www.erendemirtas.online/"
      github="https://github.com/Hypnamed"
      instagram="https://www.instagram.com/erenhypnamed/"
      steam="https://steamcommunity.com/id/hypnamed"
      twitter="https://twitter.com/hypnamed"
    />
  );
}

export default Ilke;
