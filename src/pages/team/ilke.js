import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";
import { useLang } from "../../context/langContext";


function Ilke() {
  const { lang } = useLang();

  return (
    <Detail
      image={User[1].avatar}
      name={User[1].name}
      desc={lang === "tr-TR" ? User[1].desc : User[1].desc_en}
      listL={
        lang === "tr-TR"
          ? User[1].detail.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
          : User[1].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
      }
      listR={
        lang === "tr-TR"
          ? User[1].detail.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
          : User[1].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
      }
      website={User[1].sm.website}
      github={User[1].sm.github}
      instagram={User[1].sm.instagram}
      steam={User[1].sm.steam}
      twitter={User[1].sm.twitter}
    />
  );
}

export default Ilke;
