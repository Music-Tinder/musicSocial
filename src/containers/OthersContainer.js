import { connect } from "react-redux";

import Others from '../components/Others';
import {fetchUsers} from "../actions"

const mapStateToProps = (state)  => {
  
    return{
        musicians: state.users
        
    };
}

const mapDispatchToProps = dispatch => {
    dispatch(fetchUsers());

    return{
        getMusicians : () => dispatch(fetchUsers())
            
        }
      
    }

export default connect(mapStateToProps,mapDispatchToProps)(Others);