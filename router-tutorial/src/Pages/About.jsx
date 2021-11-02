import { Link } from "react-router-dom";
import ReactPage from "../components/ReactPage";
import VuePage from "../components/VuePage";
import { Route, Switch, useRouteMatch } from "react-router";

const About = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h2>About Page</h2>
      <ul className="nav">
        <li>
          <Link to={`${url}/react`}>React</Link>
        </li>
        <li>
          <Link to={`${url}/vue`}>Vue</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/react`} component={ReactPage}></Route>
        <Route path={`${path}/vue`} component={VuePage}></Route>
      </Switch>
    </>
  );
};

export default About;
