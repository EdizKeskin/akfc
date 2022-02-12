import {
  IconButton,
  ButtonGroup,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { useLang } from "../context/langContext";

function BtnGroup() {
  const { lang, setLang } = useLang();
  const btnColor = useColorModeValue("white.50", "gray.600");
  const { colorMode, toggleColorMode } = useColorMode();

  const langBtnHandler = () => {
    if (lang === "tr-TR") {
      setLang("en-US");
    } else {
      setLang("tr-TR");
    }
  };
  return (
    <ButtonGroup
      position={"absolute"}
      top={"5"}
      right={"5"}
      mt="3"
      size="sm"
      zIndex={"overlay"}
      data-aos="zoom-in-up"
    >
      <IconButton
        icon={<ImEarth />}
        onClick={langBtnHandler}
        bgColor={btnColor}
      />

      <IconButton
        onClick={toggleColorMode}
        bgColor={btnColor}
        icon={colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      />
    </ButtonGroup>
  );
}

export default BtnGroup;
