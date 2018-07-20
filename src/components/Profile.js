import React from "react";
import EditProfile from "../components/EditProfile";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { selectedPofile: {}, isSelected: false };
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    this.props.getMusicians();
  }

  changeHandler(event) {
    if (event.target.value > -1) {
      let tempObj = this.props.musicians[event.target.value - 1];
      this.props.selectMusician(tempObj);
      this.props.logIn(true);
      this.setState({ isSelected: true });
    }
  }

  clickHandler(event) {
    event.preventDefault();
    let tempObj = this.props.musicians[event.target.id - 1];
    this.props.selectMusician(tempObj);
    this.props.logIn(true);
    this.setState({ isSelected: true });
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button className="dropbtn">Sign In As...</button>
          <div className="dropdown-content">
            {this.props.musicians.map(musician => {
              return (
                <a
                  href="#"
                  onClick={this.clickHandler}
                  id={musician.id}
                  key={musician.id}
                >
                  {musician.name}
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
