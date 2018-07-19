import { connect } from "react-redux";

import Messages from '../components/Messages';
import { fetchUsers } from "../actions"

const mapStateToProps = state => {

    return {
        musicians: state.users,
        selected: state.select,
        isLogged: state.isLogged
    };

}

const mapDispatchToProps = dispatch => {
    dispatch(fetchUsers());

    return {
        getMusicians : () => dispatch(fetchUsers()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);