import React from "react";
import EditProfile from "../components/EditProfile";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { selectedPofile: {}, isSelected: false };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    if (event.target.value > -1){
    let tempObj = this.props.musicians[event.target.value - 1];
    this.props.selectMusician(tempObj);
    this.props.logIn(true);
    this.setState({ isSelected: true });
    }
  }

  render() {
    return (
      <div className="users">
        <select onChange={this.changeHandler}>
          <option value="-1">Select user below </option>
          {this.props.musicians.map(musician => {
            return (
              <option value={musician.id} key={musician.id}>
                {" "}
                {musician.name}{" "}
              </option>
            );
          })}
        </select>

        <EditProfile
          isSelected={this.props.isLogged}
          profile={this.props.selected}
          profiles={this.props.musicians}
          isLogged={this.props.isLogged}
        />
      </div>
    );
  }
}

export default Profile;
