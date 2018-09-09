import React, { Component } from 'react';
import { commentActions } from '../actions/commentActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SubmitComment extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    };

    onUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    onSubmitHandler = event => {
        event.preventDefault()
        let formContent = Object.assign({}, this.state, {postId: this.props.postId})
        this.props.submitComment(formContent);
        this.refs.userInput.value = '';
        this.refs.contentInput.value = '';
      }

    render() {
        return (
            <div>
                <h3> Submit a Comment</h3>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <label>Username: </label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={(event) => this.onUserInput(event)}
                    />
                    <br /><br />

                    <label>Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={(event) => this.onUserInput(event)}
                    />

                    <br /><br />
                    <label>Comment: </label>
                    <input
                        type="comment"
                        id="comment"
                        name="comment"
                        placeholder="comment"
                        value={this.state.password}
                        onChange={(event) => this.onUserInput(event)}
                    />

                    <br /><br />
                    <button type="submit">Submit Comment</button>
                </form>
                <br />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        commentActions: commentActions
    }, dispatch)
  }
  
  export default connect(null, mapDispatchToProps)(SubmitComment);