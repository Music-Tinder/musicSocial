import { connect } from "react-redux";

import Profile from '../components/Profile';
import {fetchUsers,selectUser,logIn} from "../actions"



const mapStateToProps = (state)  => {
  
    return{
        musicians: state.users,
        selected: state.select,
        isLogged: state.isLogged
       
    };
}

const mapDispatchToProps = dispatch => {
    dispatch(fetchUsers());

    return{
        getMusicians : () => dispatch(fetchUsers()),
        selectMusician : (user) => dispatch(selectUser(user)),
        logIn: (status) => dispatch(logIn(status))
            
        }
      
    }

export default connect(mapStateToProps,mapDispatchToProps)(Profile);