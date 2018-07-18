import React from "react";

class User extends React.Component {
  constructor() {
    super();

    this.favouriteHandler = this.favouriteHandler.bind(this);
  }

  favouriteHandler(event) {
    if (this.props.isLogged) {
      if (this.props.user.id === this.props.selected.id)
        alert(
          "Who do you think you are...You cannot add yourself to favourites!"
        );
      else if (this.props.selected.favourites.indexOf(this.props.user.id) >= 0)
        alert("again?!!");
    } else alert("log in beeech");
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
        </div>
      </div>
    );
  }
}

export default User;
