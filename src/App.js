import React from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import "./sass/style.scss";
import routes from "./routes";

import { setUser } from "./redux/actions";

const loading = () => <div>Loading...</div>;

const App = ({ setUser }) => {
  const handleLogout = () => {
    setUser("");
  };

  return (
    <Router history={createBrowserHistory()}>
      <React.Suspense fallback={loading()}>
        <div className="App">
          <ul className="list-page">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/change-password">Change Passwords</Link>
            </li>
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/forget-password">forget-password</Link>
            </li>
            <li>
              <Link to="/login-page">login-page</Link>
            </li>
            <li>
              <Link to="/profile-page">profile-page</Link>
            </li>
            <li>
              <Link to="/reset-passwords">reset-passwords</Link>
            </li>
            <li>
              <span onClick={handleLogout}>logout</span>
            </li>
          </ul>
          <p> this is app page</p>

          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ) : null;
            })}
          </Switch>
        </div>
      </React.Suspense>
    </Router>
  );
};

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(App);
