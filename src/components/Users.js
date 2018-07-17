import React from "react";
import User from '../components/User';

class Users extends React.Component {
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
            <User key={user.id} user={user} />
          );
        })}
      </div>
    );
  }
}

export default Users;