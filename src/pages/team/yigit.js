import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";

function Yigit() {
  return (
    <Detail
      image={User[3].avatar}
      name={User[3].name}
      desc={User[3].desc}
      listL={User[3].detail.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={User[3].detail.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
      ))}
      website={User[3].sm.website}
      github={User[3].sm.github}
      instagram={User[3].sm.instagram}
      steam={User[3].sm.steam}
      twitter={User[3].sm.twitter}
    />
  );
}

export default Yigit;
