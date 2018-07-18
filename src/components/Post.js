import React from "react";

class Post extends React.Component {
    constructor(){
        super()

    }
    render(){
        console.log("posts.js", this.props.post)
        return (
            <div>
                <p> Post#{this.props.index}</p>
                <p> Date:-{this.props.post.date}</p>
                <p> Title:-{this.props.post.title}</p>
                <p> Content:-{this.props.post.content}</p>
                <p> Name:-{this.props.post.name}</p>
            </div>
        )

    }
}

export default Post;