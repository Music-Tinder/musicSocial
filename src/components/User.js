import React from "react";

class User extends React.Component {
  constructor() {
    super();

    this.favouriteHandler = this.favouriteHandler.bind(this);
    this.chatHandler = this.chatHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.subjectHandler = this.subjectHandler.bind(this);
    this.state = { added: [], msgMode: false, message: "", subject: "" };
  }

  favouriteHandler(event) {
    if (this.props.isLogged) {
      if (this.props.user.id === this.props.selected.id)
        alert(
          "Who do you think you are...You cannot add yourself to favourites!"
        );
      else if (this.props.selected.favourites.indexOf(this.props.user.id) >= 0)
        alert("again?!!");
      else {
        if (this.state.added.indexOf(this.props.user.id) < 0) {
          const self = this;

          let newFav = {
            id: this.props.selected.id - 1,
            favId: this.props.user.id
          };
          fetch("/api/addFavourite", {
            method: "post",
            body: JSON.stringify(newFav),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              self.setState({
                added: [...self.state.added, self.props.user.id]
              });
            });
        } else alert("you literally just added this one");
      }
    } else alert("log in first pls");
  }

  chatHandler() {
    if (this.props.isLogged) {
      if (this.props.user.id === this.props.selected.id)
        alert("msging yourself mr lonely?");
      else {
        this.setState({ msgMode: true });
      }
    } else alert("log in first pls");
  }

  closeHandler(event) {
    event.preventDefault();
    this.setState({ msgMode: false });
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

    let sendTo = {
      id: this.props.user.id,
      name: this.props.user.name + " " + this.props.user.surname,
      title: this.state.subject,
      content: this.state.message,
      date: fullDate
    };

    let sender = {
      id: this.props.selected.id,
      name: this.props.selected.name + " " + this.props.selected.surname,
      title: this.state.subject,
      content: this.state.message,
      date: fullDate
    };

    const self = this;

    fetch("/api/msg", {
      method: "post",
      body: JSON.stringify({ sendTo: sendTo, sender: sender }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        self.props.selectMusician(data);
      });

    this.setState({ message: "", subject: "", msgMode: false });
  }

  render() {
    return (
      <div className="user">
        <div className="user__title">
          <h2 className="username">
            {this.props.user.name} {this.props.user.surname}
          </h2>
          <p className="add-to-favourites" onClick={this.favouriteHandler}>
            ➕
          </p>
        </div>

        <img className="user__image" src={this.props.user.image} />

        <div className="user__info">
          <div className="user__info__1">
            <h3> Instruments: </h3>
            {this.props.user.instruments.map((instrument, index) => {
              return (
                <div key={instrument}>
                  <p>{instrument}</p>
                </div>
              );
            })}
            <h3>Location:</h3> <p>{this.props.user.locationIds}</p>
          </div>
          <div className="user__info__2">
            <h3>Genres:</h3> <p>{this.props.user.genres}</p>
            <h3>Availability:</h3> <p>{this.props.user.availability}</p>
          </div>
        </div>

        <div className="user__soundcloud">
          <iframe
            className="soundcloud"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
              this.props.user.social.soundcloud
            }&color=%68b95c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          />
        </div>
        <form className={this.state.msgMode ? "" : "hidden"}>
          <div className="message-box">
            <input
              className="message-box__subject-field"
              onChange={this.subjectHandler}
              value={this.state.subject}
              placeholder="Subject"
            />{" "}
            <br />
            <input
              className="message-box__content-field"
              onChange={this.messageHandler}
              placeholder="Message"
              value={this.state.message}
            />{" "}
            <br />
            <button onClick={this.submitHandler}> send </button>
            <button onClick={this.closeHandler}> 🗑 </button> <br />
          </div>
        </form>

        <div className="user__socials">
          <a
            href={`https://www.instagram.com/${
              this.props.user.social.instagram
            }`}
            target="_blank"
          >
            <img className="icon" src="../static/assets/insta.png" />
          </a>

          <a
            href={`https://twitter.com/${this.props.user.social.twitter}`}
            target="_blank"
          >
            <img className="icon" src="../static/assets/twitter.png" />
          </a>
          <a
            href={`https://soundcloud.com/${
              this.props.user.social.soundcloudProfile
            }`}
            target="_blank"
          >
            <img className="icon" src="../static/assets/soundcloud.png" />
          </a>
          <a
            href={`https://www.youtube.com/channel/${
              this.props.user.social.youtube
            }`}
            target="_blank"
          >
            <img className="icon" src="../static/assets/youtube.png" />
          </a>
          <button className="msg-button" onClick={this.chatHandler}>
            ✉️
          </button>
        </div>
      </div>
    );
  }
}

export default User;
