import React from "react";
import Post from '../components/Post';
import NewPost from '../components/NewPost';

class Posts extends React.Component {
    
    constructor(){
        super()

        this.state = { wallPosts: [] }
        this.update=this.update.bind(this);
    }

   update(data){
    this.setState({wallPosts:data});
   } 


    componentDidMount(){
        fetch(
            `/api/wallPosts/`
          )
            .then(response => response.json())
            .then(json => {
                this.setState({wallPosts: json})
    
            });

        }
    render(){

    return(

        <div>

        <NewPost selected={this.props.selected}
         isLogged={this.props.isLogged} update={this.update}  />


        {this.state.wallPosts.map((post, index) => { return (
        <Post key={index} post={post} index={index}/>
        )}
    )}
         </div>
    )

    }
}

export default Posts;