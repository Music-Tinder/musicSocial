import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersContainer from "../containers/UsersContainer";
import Others from "../components/Others";
import ProfileContainer from "../containers/ProfileContainer";
import HomePage from "../components/HomePage";
import PostContainer from "../containers/PostContainer";
import MessageContainer from "../containers/MessageContainer";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/all" render={() => <UsersContainer instrument="all"/>} />
          <Route
            path="/guitar"
            render={() => <UsersContainer instrument="Guitar" />}
          />
          <Route
            path="/drums"
            render={() => <UsersContainer instrument="Drums" />}
          />
          <Route
            path="/vocals"
            render={() => <UsersContainer instrument="Vocals" />}
          />
          <Route path="/other" component={Others} />
          <Route path="/create" component={PostContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/inbox" component={MessageContainer} />
        </Switch>
      </div>
    );
  }
}

export default Menu;
