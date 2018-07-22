import React from "react";

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { subject: "", message: "" };
    this.subjectHandler = this.subjectHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  subjectHandler(event) {
    this.setState({ subject: event.target.value });
  }

  messageHandler(event) {
    this.setState({ message: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    let date = new Date();
    let fullDate = `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()} at: ${date.getHours()}:${date.getMinutes()}`;
    let name = this.props.selected.name + " " + this.props.selected.surname;
    const newPost = {
      id: this.props.selected.id,
      name: name,
      title: this.state.subject,
      content: this.state.message,
      date: fullDate
    };


    fetch("/api/addWallPost", {
      method: "post",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(data => this.props.update(data) )

    this.setState({ subject: "", message: "" });
  }

  render() {
    if (!this.props.isLogged) return <p> please log in to post </p>;

    return (
      <div className="message-board__new-post">
        <form>
          <label> Subject </label>{" "}
          <input onChange={this.subjectHandler} value={this.state.subject} />
          <br />
          <label> Message </label>{" "}
          <textarea onChange={this.messageHandler} value={this.state.message} />
          <br />
          <button className="post-button" onClick={this.submitHandler}>
            {" "}
            ✉️{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default NewPost;
