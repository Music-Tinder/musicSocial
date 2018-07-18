import React from "react";
import Post from '../components/Post';

class Posts extends React.Component {
    
    constructor(){
        super()

        this.state = { wallPosts: [] }
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
console.log("here",this.state.wallPosts)

    return(
        <div>
        {this.state.wallPosts.map((post, index) => { return (
        <Post post={post} index={index}/>
        )}
    )}
            </div>
    )

    }
}

export default Posts;