import React from "react";

class Others extends React.Component {

    constructor(){
        super();
        this.state=({choice:"",
            instruments:["Brass","Piano","Woodwind","Percussion","Electronic","Synthesizer","Violin"],});
        this.choiceHandler=this.choiceHandler.bind(this);

    }

    choiceHandler(event){
        console.log(event.target.textContent);
        this.setState({choice:event.target.textContent})
    }

    render(){

     let   filteredArray = this.props.musicians.filter(user=>{
            return (user.instruments.indexOf(this.state.choice) >-1)
          });
        
        return(
            <div>
                {this.state.instruments.map(instrument =>{
                    return(
                        <button onClick={this.choiceHandler} key={instrument}>{instrument}</button>
                    );
                })}


                    <div>
    
    {filteredArray.map(user=>{
      return(
        <div key={user.id}>
       <p> Name: {user.name} </p>
       <p> Surname: {user.surname} </p>
       <p> instruments: </p>
       {user.instruments.map((instrument,index)=>{
         return(
           <div key={instrument}>
          <p>{index+1}-: {instrument}  </p>
           </div>
         )
       })}
        
        </div>
      )
    })}
    
    </div>
                

                
                </div>
        )
    }


}

export default Others;