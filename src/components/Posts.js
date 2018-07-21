import React from "react";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

class Posts extends React.Component {
  constructor() {
    super();

    this.state = { wallPosts: {} };
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.props.getMusicians();
  }

  update(data) {
    this.setState({ wallPosts: data });
  }

  componentDidMount() {
    fetch(`/api/wallPosts/`)
      .then(response => response.json())
      .then(json => {
        this.setState({ wallPosts: json });
      });
  }
  render() {
    return (
      <div className="message-board">
        <NewPost
          selected={this.props.selected}
          isLogged={this.props.isLogged}
          update={this.update}
        />

        {Object.keys(this.state.wallPosts).map((key,index) => {
          return <Post key={index} post={this.state.wallPosts[key]} index={index} />;
        })}
      </div>
    );
  }
}

export default Posts;
