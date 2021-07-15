import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  appBody: {
    minHeight: '100vh',
    textAlign: 'left',
    marginTop: '2rem',
    marginLeft: '2rem'
  }
})

export default Login;
