import { connect } from "react-redux";
import Users from '../components/Users';
import {fetchUsers} from "../actions"

const mapStateToProps = state => {
  
    return{
        musicians: state.users
    };
}

const mapDispatchToProps = dispatch => {
    return{
        getMusicians : () => dispatch(fetchUsers())
            
        }
      
    }


export default connect(mapStateToProps,mapDispatchToProps)(Users);