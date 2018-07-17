import React from "react";

import UsersContainer from '../containers/UsersContainer'

class Others extends React.Component {

    constructor(){
        super();
        this.state=({choice:"",
            instruments:["Brass","Piano","Woodwind","Percussion","Electronic","Synthesizer","Violin"],});
        this.choiceHandler=this.choiceHandler.bind(this);

    }

    choiceHandler(event){
        this.setState({choice:event.target.textContent})
    }

    render(){

     
        return(
            <div>
                {this.state.instruments.map(instrument =>{
                    return(
                        <button onClick={this.choiceHandler} key={instrument}>{instrument}</button>
                    );
                })}


                
                <UsersContainer instrument={this.state.choice} />

                
                </div>
        )
    }


}

export default Others;