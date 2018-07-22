import React from "react";
import EditProfile from "../components/EditProfile";

class Profile extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    this.props.getMusicians("all");
  }

  

  clickHandler(event) {
    event.preventDefault();
    let tempObj = this.props.musicians[event.target.id];
    this.props.selectMusician(tempObj);
    this.props.logIn(true);
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button className="dropbtn">Sign In As...</button>
          <div className="dropdown-content">
            {Object.keys(this.props.musicians).map(musician => {
              return (
                <a
                  href="#"
                  onClick={this.clickHandler}
                  id={this.props.musicians[musician].id}
                  key={this.props.musicians[musician].id}
                >
                  {this.props.musicians[musician].name}
                </a>
              );
            })}
          </div>
        </div>

        <EditProfile
          isSelected={this.props.isLogged}
          profile={this.props.selected}
          profiles={this.props.musicians}
          isLogged={this.props.isLogged}
          selectMusician={this.props.selectMusician}
        />
      </div>
    );
  }
}

export default Profile;
