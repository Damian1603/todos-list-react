import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { TaskPage } from "./features/tasks/TaskPage/index.js";
import { TasksPage } from "./features/tasks/TasksPage/index.js";
import { AuthorPage } from "./features/author/AuthorPage.js";
import { StyledNavigationList, StyledNavLink } from "./styled.js";

export const App = () => (
  <HashRouter>
    <nav>
      <StyledNavigationList>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </StyledNavigationList>
      <Switch>
        <Route path="/zadania/:id">
          < TaskPage />
        </Route>
        <Route path="/zadania/">
          < TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage/>
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);