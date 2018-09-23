import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions'; // TO DO
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostForm from './PostForm'; // TO DO
import PostsList from '../components/PostsList'; // TO DO

class AllComments extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    return (
      <div className="AllComments">
        {
          <React.Fragment>
            <PostForm />
            <PostsList postsList={this.props.posts.all} />
          </React.Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPosts: fetchPosts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllComments);