import "./App.css";
import { useEffect, } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

import AOS from "aos";
import "aos/dist/aos.css";

//PAGES
import Home from "./pages/home";
import Err404 from "./pages/err/err404";
import BtnGroup from "./components/btnGroup";
import Detail from "./pages/profiles";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team/:id" element={<Detail />} />
            <Route path="*" element={<Err404 />} />
          </Routes>
        </div>
      </Router>
    </Box>
  );
}

export default App;
