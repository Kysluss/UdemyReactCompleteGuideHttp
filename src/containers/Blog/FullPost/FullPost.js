import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidUpdate() {
        if(this.props.id) {
            // If we don't do this check, it will execute an infinite loop because we are calling setState
            // To get around this, we check if loadedPost hasn't been set yet
            // If loadedPost does exist already, we need to make sure that the id has changed
            // If the id hasn't changed, we don't need to execute the http request
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        })
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

            // When this.props.id is valid, we execute an asynchronous request
            // Because of this, we need to check if loadedPost exists
        if(this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;