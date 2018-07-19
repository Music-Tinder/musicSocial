import React from "react";

class Message extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p> #{this.props.index + 1}</p>
        <p> From: {this.props.msg.name}</p>
        <p> Date: {this.props.msg.date}</p>
        <p> Subject: {this.props.msg.title}</p>
        <p> Message: {this.props.msg.content}</p>
      </div>
    );
  }
}

export default Message;
