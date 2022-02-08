import { ListItem } from "@chakra-ui/react";
import Detail from "../../components/detail";
import User from "../users";

function Ediz() {
  return (
    <Detail
      image={User[0].avatar}
      name={User[0].name}
      desc={User[0].desc}
      listL={User[0].detail.map((item, index) => (
        <ListItem key={index}>{item.itemL}</ListItem>
      ))}
      listR={User[0].detail.map((item, index) => (
        <ListItem key={index}>{item.itemR}</ListItem>
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
