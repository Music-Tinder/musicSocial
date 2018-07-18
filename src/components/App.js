import React from "react";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
