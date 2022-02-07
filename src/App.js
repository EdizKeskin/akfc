import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./pages/home";
import Ediz from "./pages/team/ediz";
import Ilke from "./pages/team/ilke";
import Mustafa from "./pages/team/mustafa";
import Yigit from "./pages/team/yigit";
import Err404 from "./pages/err/err404";

function App() {
  return (
    <header className="App-header">
      <Router>
        <div>
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
    </header>
  );
}

export default App;
