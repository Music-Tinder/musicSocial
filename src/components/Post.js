import React from "react";

class Post extends React.Component {
    constructor(){
        super()

    }
    render(){
        return (
            <div>
                <p> Post#{this.props.index+1}</p>
                <p> Date:-{this.props.post.date}</p>
                <p> Title:-{this.props.post.title}</p>
                <p> Content:-{this.props.post.content}</p>
                <p> By:-{this.props.post.name}</p>
            </div>
        )

    }
}

export default Post;