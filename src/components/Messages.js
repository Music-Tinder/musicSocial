import React from "react";

import Message from '../components/Message';
class Messages extends React.Component{

    render(){
        if(!this.props.isLogged) return <p> log in to view msgs </p>
        return(
            <div>
            <p> inbox </p>
            {this.props.selected.inbox.map((msg,index)=>{
                return(
                    <Message msg={msg} index={index} />
                )
            })}

            <p> sent </p>
            {this.props.selected.sent.map((msg,index)=>{
                return(
                    <Message msg={msg} index={index} />
                )
            })}

             </div>
        )
    }

}


export default Messages;