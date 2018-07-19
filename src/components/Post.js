import React from "react";

class Post extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="message-board__notices">
        {/* <p> #{this.props.index + 1}</p> */}
        <p>
          <strong>{this.props.post.name}</strong> -{" "}
          <i>{this.props.post.title}</i>
        </p>
        <hr />
        <p> {this.props.post.content}</p>
        <p> {this.props.post.date}</p>
      </div>
    );
  }
}

export default Post;
