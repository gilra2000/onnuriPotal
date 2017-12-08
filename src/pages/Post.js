import React, { Component } from 'react';

class Post extends Component {

    render(){
        return(
            <div>
                포스트{this.props.match.params.id}
            </div>
        )
    }
}

export default Post;