import React from "react";

class Profile extends React.Component {

    constructor(){
        super();
        this.state={selectedPofile:{}, isSelected:false }
        this.changeHandler=this.changeHandler.bind(this)
    }

    changeHandler(event){
       
        let tempObj= this.props.musicians[event.target.value-1]
        this.setState({selectedPofile:tempObj})

    }


    render(){
       
        return(
            <div>
                <select onChange={this.changeHandler} >
                    {this.props.musicians.map(musician=>{
                        return(
                        <option value={musician.id} key={musician.id}> {musician.name} </option>
                        )
                    })}

                    </select>
              </div>
        )
    }

}


export default Profile;