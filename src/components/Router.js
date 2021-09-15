import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

// eslint-disable-next-line import/no-anonymous-default-export

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
