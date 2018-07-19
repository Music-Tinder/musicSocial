import React from "react";

class Message extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <p> Msg#{this.props.index + 1}</p>
        <p> To/From:-{this.props.msg.name}</p>
        <p> Date:-{this.props.msg.date}</p>
        <p> Title:-{this.props.msg.title}</p>
        <p> Content:-{this.props.msg.content}</p>
      </div>
    );
  }
}

export default Message;
