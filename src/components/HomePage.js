import React from "react";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="logo">
        <img className="logo__picture" src="../static/assets/logo.png" />
      </div>
    );
  }
}
export default HomePage;
