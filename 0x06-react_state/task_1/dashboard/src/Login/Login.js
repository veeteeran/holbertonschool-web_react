import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    this.setState({ isLoggedIn: true })
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value },
      () => {
        this.state.email !== '' && this.state.password !== ''
          ? this.setState({ enableSubmit: true })
          : this.setState({ enableSubmit: false })
      }
    )
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value },
      () => {
        this.state.email !== '' && this.state.password !== ''
          ? this.setState({ enableSubmit: true })
          : this.setState({ enableSubmit: false })
      }
    )
  }

  render() {
    return (
      <>
        <div className={css(styles.appBody, styles.small)}>
          <h1>Log in to continue</h1>
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">
              Email:
              <input
                className={css(styles.noBorder)}
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                className={css(styles.noBorder)}
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </label>
            <input
              className={css(styles.yellowBorder)}
              type='submit'
              value='Submit'
              onClick={this.handleLoginSubmit}
              disabled={!this.state.enableSubmit}
            />
          </form>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  appBody: {
    minHeight: '50vh',
    textAlign: 'left',
    marginTop: '2rem',
    marginLeft: '2rem',
  },
  small: {
    '@media (max-width: 900px)': {
      display: 'grid',
      justifyContent: 'center',
    }
  },
  noBorder: {
    '@media (max-width: 900px)': {
      border: 'none'
    }
  },
  yellowBorder: {
    '@media (max-width: 900px)': {
      border: '2px solid gold',
      backgroundColor: 'transparent',
      width: '5vw'
    }
  }
})

export default Login;
