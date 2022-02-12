import { IconButton, ButtonGroup, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { useLang } from "../context/langContext";

function BtnGroup() {
  const { lang, setLang } = useLang();
  const { colorMode, toggleColorMode } = useColorMode();

  const langBtnHandler = () => {
    if (lang === "tr-TR") {
      setLang("en-US");
    } else {
      setLang("tr-TR");
    }
  };
  return (
    <ButtonGroup position={"absolute"} top={"5"} right={"5"} mt="3" size="sm">
      <IconButton icon={<ImEarth />} onClick={langBtnHandler} />

      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      />
    </ButtonGroup>
  );
}

export default BtnGroup;