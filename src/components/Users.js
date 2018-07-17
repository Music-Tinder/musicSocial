import React from "react";

class Users extends React.Component {
  render() {
    let filteredArray = [];
    if (this.props.instrument) {
      filteredArray = this.props.musicians.filter(user => {
        return user.instruments.indexOf(this.props.instrument) > -1;
      });
    } else filteredArray = this.props.musicians;

    return (
      <div className="users">
        {filteredArray.map(user => {
          return (
            <div className="user" key={user.id}>
              <h2>
                {user.name} {user.surname}
              </h2>
              <p>➕</p>
              <img src={user.image} />
              <div className="user__info">
                <h3> Instruments: </h3>
                {user.instruments.map((instrument, index) => {
                  return (
                    <div key={instrument}>
                      <p>
                        {index + 1}-: {instrument}{" "}
                      </p>
                    </div>
                  );
                })}
                <h3>Location:</h3> <p>{user.location}</p>
                <h3>Genres:</h3> <p>{user.genres}</p>
                <h3>Availability:</h3> <p>{user.availability}</p>
              </div>
              <div className="user__socials">
                <a href={user.social.instagram} target="_blank">
                  <img className="icon" src="../static/assets/insta.png" />
                </a>
                <a href={user.social.twitter} target="_blank">
                  <img className="icon" src="../static/assets/twitter.png" />
                </a>
                <a href={user.social.soundcloud} target="_blank">
                  <img className="icon" src="../static/assets/soundcloud.png" />
                </a>
                <a href={user.social.youtube} target="_blank">
                  <img className="icon" src="../static/assets/youtube.png" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
