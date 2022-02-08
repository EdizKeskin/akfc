import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";

function Ilke() {
  return (
    <Detail
      image={User[1].avatar}
      name={User[1].name}
      desc={User[1].desc}
      listL={User[1].detail.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={User[1].detail.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      website={User[1].sm.website}
      github={User[1].sm.github}
      instagram={User[1].sm.instagram}
      steam={User[1].sm.steam}
      twitter={User[1].sm.twitter}
    />
  );
}

export default Ilke;
