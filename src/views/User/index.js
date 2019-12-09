import React, { Component } from 'react';
import styles from './index.module.scss'
import { 
  getUserInfo,
} from '../../action/actionCreator';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class User extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getUserInfo(id)
  }

  render() {
    const { userInfo} = this.props
    return (
      <div className={styles.user}>
        <div className={styles.item}>
          <span className={styles.span}>Name: </span>
          {userInfo.name}
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Email: </span>
          {userInfo.email}
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Phone: </span>
          {userInfo.phone}
        </div>
        <div className={styles.item}>
          <span className={styles.span}>City: </span>
          {userInfo.address ? userInfo.address.city : ''}
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Address: </span>
          {userInfo.website}
        </div>
        <div className={styles.item}>
          <span className={styles.span}>Company: </span>
          {userInfo.company ? userInfo.company.name : ''}
        </div>
        <Link className={styles.button} to={ '/' }>Go Back</Link>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { userInfo: state.indexReducer.userInfo }
);

const mapDispatchToProps = {
  getUserInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
