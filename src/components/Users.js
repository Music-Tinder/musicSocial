import React from "react";
import User from "../components/User";

class Users extends React.Component {
  componentDidMount() {
    this.props.getMusicians(this.props.instrument);
  }

  componentDidUpdate(prevProps){
    if(this.props.instrument!=prevProps.instrument)
      this.props.getMusicians(this.props.instrument);
    
  }

  render() {
    

    return (
      <div className="users">
        {Object.keys(this.props.musicians).map(user => {
          return (
            <User
              key={this.props.musicians[user].id}
              user={this.props.musicians[user]}
              selected={this.props.selected}
              isLogged={this.props.isLogged}
              selectMusician={this.props.selectMusician}
              updateSelectedUser={this.props.updateSelectedUser}
            />
          );
        })}
      </div>
    );
  }
}

export default Users;
