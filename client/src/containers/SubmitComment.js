import React, { Component } from 'react';
import { signUp } from '../actions/sessionActions.js';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

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
        event.preventDefault();
        this.props.signUp(this.state)
      }

    render() {
        if (this.props.user.id) {
            return (
                <Redirect to='/settings' />
            )
        }


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

const mapStateToProps = (state) => {
    return {
        user: state.session.user
    }
  }
  
export default withRouter(connect(mapStateToProps, { signUp })(SubmitComment));