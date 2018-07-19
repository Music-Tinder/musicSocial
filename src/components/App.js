import React from "react";

import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

class App extends React.Component {
  componentDidMount(){
     
    // fetch(
    //   `/api/ip`
    // )
    //   .then(response => (response.json()))
    //   .then(data =>{})
    //   .catch(err => console.log("errrrrror",err));

  }
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
