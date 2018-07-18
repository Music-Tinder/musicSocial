import React from 'react'
import User from '../components/User';

class EditProfile extends React.Component{
    constructor(){
        super();
        this.state={firstName:"",surName:""}
        this.firstNameHandler=this.firstNameHandler.bind(this)
        this.surNameHandler=this.surnameHandler.bind(this)
    }

    firstNameHandler(event){
        this.setState({firstName:event.target.value})
   
    }

    surnameHandler(event){
        this.setState({surName:event.target.value})
    
    }

    submitHandler(event){
        event.preventDefault();
    }

    render(){
        if(!this.props.isSelected) return (
            <p> Please select a profile </p>
        )
        else

        return(
            <div>

            <User user={this.props.profile} isLogged={this.props.isLogged}  selected={this.props.profile}/>
            <br/>
            <p> favourite profiles: </p>
            {this.props.profile.favourites.map((id,index)=>{
                return(
                    <div key={index}>
                        <p> Favourite Profile #{index+1} </p>
                        <User user={this.props.profiles[id-1]}   selected={this.props.profile}
                        isLogged={this.props.isLogged} />
                    </div>
                );
            })}


            <br/>
            <form className="hidden">
            <label>First Name</label>
            <input onChange={this.firstNameHandler} placeholder={this.props.profile.name} value={this.state.firstName} />
            <br/> <label>Surname</label>
            <input onChange={this.surnameHandler} placeholder={this.props.profile.surname} value={this.state.surName} />
            <button onClick={this.submitHandler}> Update Profile </button>
            </form>


             </div>
        )

    }

}

export default EditProfile;