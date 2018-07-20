import React from "react";

import UsersContainer from "../containers/UsersContainer";

class Others extends React.Component {
  constructor() {
    super();
    this.state = {
      choice: "",
      instruments: [
        "Brass",
        "Piano",
        "Woodwind",
        "Percussion",
        "Electronic",
        "Synthesizer",
        "Violin"
      ]
    };
    this.choiceHandler = this.choiceHandler.bind(this);
  }

  choiceHandler(event) {
    this.setState({ choice: event.target.textContent });
  }

  render() {
    return (
      <div>
        <div className="other-components">
          {this.state.instruments.map(instrument => {
            return (
              <a key={instrument} onClick={this.choiceHandler}>
                <p>{instrument}</p>
              </a>
            );
          })}
        </div>

        <UsersContainer instrument={this.state.choice} />
      </div>
    );
  }
}

export default Others;
