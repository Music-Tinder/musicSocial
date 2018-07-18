import React from "react";

class Post extends React.Component {
    constructor(){
        super()

    }
    render(){
        console.log("posts.js", this.props.post)
        return (
            <div>
                <p>
                    Name:-{this.props.post.name}
                </p>
            </div>
        )

    }
}

export default Post;