import { connect } from "react-redux";

import Profile from '../components/Profile';
import {fetchUsers,selectUser} from "../actions"



const mapStateToProps = (state)  => {
  
    return{
        musicians: state.users,
        selected: state.select
       
    };
}

const mapDispatchToProps = dispatch => {
    dispatch(fetchUsers());

    return{
        getMusicians : () => dispatch(fetchUsers()),
        selectMusician : (user) => dispatch(selectUser(user))
            
        }
      
    }

export default connect(mapStateToProps,mapDispatchToProps)(Profile);