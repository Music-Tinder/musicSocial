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
      <div className="app__users">
        {filteredArray.map(user => {
          return (
            <div className="app__users__card" key={user.id}>
              <img src={user.image} />
              <div className="app__users__card__info">
                <p>
                  Name: {user.name} {user.surname}
                </p>
                <p> Instruments: </p>
                {user.instruments.map((instrument, index) => {
                  return (
                    <div key={instrument}>
                      <p>
                        {index + 1}-: {instrument}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="app__users__card__socials">
                <i src="../../static/assets/insta.png" />
                <i src="../../static/assets/twitter.png" />
                <i src="../../static/assets/soundcloud.png" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
