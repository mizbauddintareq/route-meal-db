import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealDetails from "./components/MealDetails/MealDetails";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/meal/:idMeal">
            <MealDetails></MealDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
