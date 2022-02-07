import { ListItem } from "@chakra-ui/react";

import Detail from "../../components/detail";

const list = [
  {
    itemL: "Bütün anime kızlarını ezbere biliyor",
    itemR: "Obez Discord kullanıcısı",
  },
  {
    itemL: "Snapchat prosu",
    itemR: "Karanlıklarda yaşar",
  },
  {
    itemL: "Aynı anda 9 kızla konuşabilir",
    itemR: "İmanlı",
  },
];

function Mustafa() {
  return (
    <Detail
      image="https://c.tenor.com/kX00C2557JgAAAAC/bleach.gif"
      name="Taha Aslan"
      desc="Has animeci ve abi düşmanı. Büyüyünce camii olmak istiyor."
      listL={list.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={list.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      instagram="https://www.instagram.com/sainntt/"
      steam="https://steamcommunity.com/id/safa61"
      twitter="https://twitter.com/tahatja"
    />
  );
}

export default Mustafa;
