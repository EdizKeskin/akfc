import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";

function Mustafa() {
  return (
    <Detail
      image={User[2].avatar}
      name={User[2].name}
      desc={User[2].desc}
      listL={User[2].detail.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={User[2].detail.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      website={User[2].sm.website}
      github={User[2].sm.github}
      instagram={User[2].sm.instagram}
      steam={User[2].sm.steam}
      twitter={User[2].sm.twitter}
    />
  );
}

export default Mustafa;
