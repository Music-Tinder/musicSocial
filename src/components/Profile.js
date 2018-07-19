import React from "react";
import EditProfile from '../components/EditProfile';

class Profile extends React.Component {

    constructor(){
        super();
        this.state={selectedPofile:{}, isSelected:false }
        this.changeHandler=this.changeHandler.bind(this)
    }

    changeHandler(event){
       
        let tempObj= this.props.musicians[event.target.value-1]
        this.props.selectMusician(tempObj);
        this.props.logIn(true);
        this.setState({isSelected:true})


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
                   
                    <EditProfile isSelected={this.props.isLogged} profile={this.props.selected}
                     profiles={this.props.musicians} isLogged={this.props.isLogged} />

              </div>
        )
    }

}


export default Profile;