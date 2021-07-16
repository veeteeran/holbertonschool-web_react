import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import './Notifications.css';
import closeIcon from './close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // console.log(`nextProps: ${nextProps}`);
    // console.log(`nextProps.listNotifications: ${nextProps}`);
    // console.log(`this.props.listNotifications.length: ${this.props.listNotifications.length}`)

    // nextProps && nextProps.listNotifications
    //   ? nextProps.listNotifications.length > this.props.listNotifications.length
    //   : true
    return nextProps.length > this.props.listNotifications.length
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.notificationsContainer)}>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {
          displayDrawer
            ? <div className={css(styles.Notifications)}>
              <p>Here is the list of notifications</p>
              <ul>
                {
                  listNotifications && listNotifications.length > 0
                    ? listNotifications.map(({ type, value, html, id }) => (
                      <NotificationItem
                        key={id}
                        type={type}
                        value={value}
                        html={html}
                        markAsRead={this.markAsRead}
                        id={id}
                        styles={
                          html || type === 'urgent'
                            ? styles.urgent
                            : styles.default
                        }
                      />
                    ))
                    : <NotificationItem value='No new notification for now' />
                }
              </ul>
              <button
                style={{
                  position: "absolute",
                  top: "3.5rem",
                  right: "2.2rem"
                }}
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
              >
                <img src={closeIcon} alt="close icon" width="10px" height="10px" />
              </button>
            </div>
            : null
        }
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
}

const styles = StyleSheet.create({
  notificationsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
    marginRight: '1rem'
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '.5rem'
  },
  Notifications: {
    border: 'dashed red',
    padding: '2rem',
    marginTop: '.3rem'
  }
})

export default Notifications;
