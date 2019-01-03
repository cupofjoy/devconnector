import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  const { comments, postId } = this.props

  render() {
    return comments.map(comment => <CommentItem key={comment._id} comment={comment} postId={postId} />)
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
}

export default CommentFeed;
