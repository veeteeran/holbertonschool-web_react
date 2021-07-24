import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import holberton_logo from '../assets/holberton_logo.jpeg';
import { AppContext } from "../App/AppContext";

class Header extends Component {
  render() {
    let value = this.context;
    return (
      <>
        < div className={css(styles.header)} >
          <img src={holberton_logo} className={css(styles.logo)} alt="logo" />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div >
        {
          value.user.isLoggedIn &&
          (
            <div className={css(styles.welcome)} id='logoutSection'>
              Welcome {value.user.email} <a className={css(styles.logout)} onClick={value.logOut}>(logout)</a>
            </div>
          )
        }
      </>
    );
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
    '@media (max-width: 900px)': {
      justifyContent: 'center'
    }
  },
  title: {
    color: 'red'
  },
  logo: {
    height: '100px',
    width: '100px'
  },
  welcome: {
    marginTop: '1rem'
  },
  logout: {
    cursor: 'pointer'
  }
})

export default Header;
