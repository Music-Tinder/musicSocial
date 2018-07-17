import { connect } from "react-redux";

import Profile from '../components/Profile';
import {fetchUsers} from "../actions"



const mapStateToProps = (state,ownProps)  => {
  
    return{
        musicians: state.users,
       
    };
}

const mapDispatchToProps = dispatch => {
    dispatch(fetchUsers());

    return{
        getMusicians : () => dispatch(fetchUsers())
            
        }
      
    }

export default connect(mapStateToProps,mapDispatchToProps)(Profile);