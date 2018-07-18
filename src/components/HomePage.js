import React from "react";
import UserContainer from "../containers/UsersContainer";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadVideo;
  }

  render() {
    return (
      <div>
        <video id="background-video" loop autoPlay>
          <source src={this.props.videoURL} type="video/mp4" />
        </video>
        <UserContainer loadVideo={this.props.loadVideo} />
      </div>
    );
  }
}
export default HomePage;
