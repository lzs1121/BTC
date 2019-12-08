import React, { Component } from 'react';
import styles from './index.module.scss'
import {
  getCommentsInfo
} from '../../action/actionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Comments extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCommentsInfo(id)
  }

  render() {
    const comments = this.props.comments
    console.log(comments)
    return (
      <div className={styles.posts}>
        <Link className={styles.button} to={ '/' }>Go Back</Link>
        {
          comments.map((item, index) => (
            <div className={styles.post} key={index}>
              <div className={styles.title}>
                {item.name}
              </div>
              <div className={styles.content}>
                {item.body}
              </div>
              <div className={styles.buttonArea}>
                Email: {item.email}
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
    comments: state.indexReducer.comments
  }
);

const mapDispatchToProps = {
  getCommentsInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments)