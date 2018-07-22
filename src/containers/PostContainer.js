import { connect } from "react-redux";

import Posts from "../components/Posts";

const mapStateToProps = state => {
  return {
    musicians: state.users,
    selected: state.select,
    isLogged: state.isLogged
  };
};


export default connect(
  mapStateToProps,
  null
)(Posts);
