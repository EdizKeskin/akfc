import {
  IconButton,
  ButtonGroup,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { useLang } from "../context/langContext";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

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
    <>
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
      <Link to="contact">
        <Button variant={"link"} position={"absolute"} bottom={3} left={3} zIndex="2">
          <FormattedMessage id="contact" />
        </Button>
      </Link>
    </>
  );
}

export default BtnGroup;
