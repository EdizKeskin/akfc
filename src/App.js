import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

//PAGES
import Home from "./pages/home";
import Ediz from "./pages/team/ediz";
import Ilke from "./pages/team/ilke";
import Mustafa from "./pages/team/mustafa";
import Yigit from "./pages/team/yigit";
import Err404 from "./pages/err/err404";
import BtnGroup from "./components/btnGroup";

function App() {
  const bg = useColorModeValue("white", "#282c34");
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <Box bg={bg} minH="100vh">
      <Router>
        <div>
          <BtnGroup />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/ediz">
              <Ediz />
            </Route>
            <Route path="/ilke">
              <Ilke />
            </Route>
            <Route path="/taha">
              <Mustafa />
            </Route>
            <Route path="/yigit">
              <Yigit />
            </Route>
            <Route path="*">
              <Err404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </Box>
  );
}

export default App;
