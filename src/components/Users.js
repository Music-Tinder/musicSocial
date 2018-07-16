import React from "react";

class Users extends React.Component {
    
  

  render() {
    
    let filteredArray=[];
    if(this.props.instrument){
     filteredArray = this.props.musicians.filter(user=>{
      return (user.instruments.indexOf(this.props.instrument) >-1)
    });
  }
  else 
     filteredArray=this.props.musicians
    

    return (
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
    );
  }
}

export default Users;
