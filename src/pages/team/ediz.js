import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";
import { useLang } from "../../context/langContext";

function Ediz() {
  const { lang } = useLang();
  console.log(User[0].anime);

  return (
    <Detail
      image={User[0].avatar}
      name={User[0].name}
      desc={lang === "tr-TR" ? User[0].desc : User[0].desc_en}
      listL={
        lang === "tr-TR"
          ? User[0].detail.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
          : User[0].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemL}</ListItem>
            ))
      }
      listR={
        lang === "tr-TR"
          ? User[0].detail.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
          : User[0].detail_en.map((item, index) => (
              <ListItem key={index}>{item.itemR}</ListItem>
            ))
      }
      animeR={User[0].anime_girls.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      animeL={User[0].anime_girls.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      website={User[0].sm.website}
      github={User[0].sm.github}
      instagram={User[0].sm.instagram}
      steam={User[0].sm.steam}
      twitter={User[0].sm.twitter}
    />
  );
}

export default Ediz;
