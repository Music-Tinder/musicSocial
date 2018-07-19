import React from "react";

import Message from '../components/Message';
class Messages extends React.Component{

   

    render(){
        if(!this.props.isLogged) return <p> log in to view msgs </p>
       
        return(
            <div>
            <h2> INBOX </h2>
            {this.props.selected.inbox.map((msg,index)=>{
                return(
                    <Message key={index} msg={msg} index={index} />
                )
            })}

            <h2> SENT </h2>
            {this.props.selected.sent.map((msg,index)=>{
                return(
                    <Message key={index} msg={msg} index={index} />
                )
            })}

             </div>
        )
    }

}


export default Messages;