import React from "react";
import User from "../components/User";

class EditProfile extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.isSelected) return <p></p>;

    return (
      <div className="users">
        <User
          user={this.props.profile}
          isLogged={this.props.isLogged}
          selected={this.props.profile}
        />
        <br />
        <p> favourite profiles: </p>
        {this.props.profile.favourites.map((id, index) => {
          return (
            <div key={index}>
              <p> Favourite Profile #{index + 1} </p>
              <User
                user={this.props.profiles[id - 1]}
                selected={this.props.profile}
                isLogged={this.props.isLogged}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EditProfile;
