import React, { Component } from 'react';
import styles from './index.module.scss'
import {
  getPostsInfo
} from '../../action/actionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Posts extends Component {

  componentDidMount() {
    this.props.getPostsInfo()
  }

  render() {
    const { posts } = this.props;
    return (
      <div className={styles.posts}>
        <Link className={styles.button} to={'/form' }>Add Post</Link>
        {
          posts.map((item, index) => (
            <div className={styles.post} key={index}>
              <div className={styles.title}>
                {item.title}
              </div>
              <div className={styles.content}>
                {item.body}
              </div>
              <div className={styles.buttonArea}>
                <Link className={styles.button} to={'/user/' + item.userId }>Post UserId: {item.userId}</Link>
                <Link className={styles.button} to={'/comments/' + item.id }>Comments</Link>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    posts: state.indexReducer.posts
  }
);

const mapDispatchToProps = {
  getPostsInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)