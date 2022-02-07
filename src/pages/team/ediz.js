import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";

const list = [
  {
    itemL: "Warframe obezi",
    itemR: "Her gün boş bilgi verebilir",
  },
  {
    itemL: "ZİH̨̢̀İ͚̹Ņ̰͟͝SE͎͔̪L ̅̏̃҉SO̅RU̵̴N",
    itemR: "Bahtsız bedevi",
  },
  {
    itemL: "Her gün boş bilgi verebilir",
    itemR: "Obama'nın soyismini biliyor",
  },
];

function Ediz() {
  return (
    <Detail
      image="https://media2.giphy.com/media/STx6D0t05pZEidimsU/giphy.gif"
      name="Ediz Keskin"
      desc="Boş bilgilerin kralı"
      listL={list.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={list.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      website="https://www.edizkeskin.com"
      github="https://github.com/EdizKeskin"
      instagram="https://www.instagram.com/sharpness_4/"
      steam="https://steamcommunity.com/id/sharpness4"
      twitter="https://twitter.com/sharpness_4"
    />
  );
}

export default Ediz;
