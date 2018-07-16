import React from "react";

class Users extends React.Component {
    constructor(){
        super();
        this.show=this.show.bind(this);
    }



  componentDidMount() {
    this.props.getMusicians();
    console.log(this.props.musicians);
  }

  show(){
    console.log(this.props.musicians);
  }

  render() {
    return <div onClick={this.show}>Users</div>;
  }
}

export default Users;
