import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { Tasks } from "./features/tasks/Tasks.js";
import Author from "./features/author/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);