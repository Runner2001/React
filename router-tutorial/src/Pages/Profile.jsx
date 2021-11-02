import { useEffect } from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";
const Profile = ({ login }) => {
  const history = useHistory();
  console.log(history);

  useEffect(() => {
    // !login same
    if (login !== true) {
      console.log(login);
      history.push("/home");
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Profile Page</h2>

      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
