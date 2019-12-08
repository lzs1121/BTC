import React, { Component } from 'react';
import styles from './index.module.scss'
import {
  addPostInfo
} from '../../action/actionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: 1
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeContent(event) {
    this.setState({body: event.target.value});
  }

  async handleSubmit(event) {
    this.props.addPostInfo(this.state)
    this.props.history.push('/')
  }

  handleBack() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.item}>
          <span className={styles.span}>Title: </span>
          <input placeholder="Please input title" className={styles.input} type="text" value={this.state.title} onChange={this.handleChangeTitle}></input>
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Content: </span>
          <textarea rows="10" className={styles.textarea} value={this.state.body} onChange={this.handleChangeContent}></textarea>
        </div>
        <div>
          <button className={styles.button} onClick={this.handleSubmit}>Add Post</button>
          <button className={styles.button} onClick={this.handleBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.indexReducer.post
  }
);

const mapDispatchToProps = {
  addPostInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)