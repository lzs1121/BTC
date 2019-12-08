import React, { Component } from 'react';
import styles from './index.module.scss'

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        BTC Social
      </header>
    );
  }
}

export default Header