import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";
import { useLang } from "../../context/langContext";


function Yigit() {
  const { lang } = useLang();

  return (
    <Detail
      image={User[3].avatar}
      name={User[3].name}
      desc={lang === "tr-TR" ? User[3].desc : User[3].desc_en}
      listL={
        lang === "tr-TR"
          ? User[3].detail.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
          : User[3].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
      }
      listR={
        lang === "tr-TR"
          ? User[3].detail.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
          : User[3].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
      }
      website={User[3].sm.website}
      github={User[3].sm.github}
      instagram={User[3].sm.instagram}
      steam={User[3].sm.steam}
      twitter={User[3].sm.twitter}
    />
  );
}

export default Yigit;
