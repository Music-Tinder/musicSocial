import React from "react";
import User from "../components/User";

class Users extends React.Component {
  componentDidMount() {
    this.props.getMusicians();
  }
  render() {
    let filteredArray = [];
    if (this.props.instrument) {
      filteredArray = this.props.musicians.filter(user => {
        return user.instruments.indexOf(this.props.instrument) > -1;
      });
    } else filteredArray = this.props.musicians;

    return (
      <div className="users">
        {filteredArray.map(user => {
          return (
            <User
              key={user.id}
              user={user}
              selected={this.props.selected}
              isLogged={this.props.isLogged}
              selectMusician={this.props.selectMusician}
            />
          );
        })}
      </div>
    );
  }
}

export default Users;
