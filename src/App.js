import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./pages/home";
import Ediz from "./pages/ediz";
import Ilke from "./pages/ilke";
import Mustafa from "./pages/mustafa";
import Yigit from "./pages/yigit";

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
          </Switch>
        </div>
      </Router>
    </header>
  );
}

export default App;
