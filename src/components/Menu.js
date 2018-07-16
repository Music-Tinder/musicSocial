import React from "react";
import { Switch, Route } from "react-router-dom";
import UsersContainer from '../containers/UsersContainer'

class Menu extends React.Component {


    render(){
        return(
            <Switch>

            <Route path="/all" render={() => <UsersContainer  /> }/>

             </Switch>
        )
    }


}




export default Menu;