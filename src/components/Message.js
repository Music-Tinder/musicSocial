import React from "react";

class Message extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="inbox__message">
        <p>
          <strong>From:</strong> {this.props.msg.name}
        </p>
        <p>
          <strong>Date:</strong> {this.props.msg.date}
        </p>
        <p>
          <strong>Title:</strong>
          <em> {this.props.msg.title}</em>
        </p>
        <hr />
        <p>{this.props.msg.content}</p>
      </div>
    );
  }
}

export default Message;
