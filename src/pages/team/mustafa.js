import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";
import { useLang } from "../../context/langContext";

function Mustafa() {
  const { lang } = useLang();

  return (
    <Detail
      image={User[2].avatar}
      name={User[2].name}
      desc={lang === "tr-TR" ? User[2].desc : User[2].desc_en}
      listL={
        lang === "tr-TR"
          ? User[2].detail.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
          : User[2].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
      }
      listR={
        lang === "tr-TR"
          ? User[2].detail.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
          : User[2].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
      }
      website={User[2].sm.website}
      github={User[2].sm.github}
      instagram={User[2].sm.instagram}
      steam={User[2].sm.steam}
      twitter={User[2].sm.twitter}
    />
  );
}

export default Mustafa;
