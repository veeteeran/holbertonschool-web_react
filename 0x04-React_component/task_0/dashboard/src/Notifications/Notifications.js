import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';


const Notifications = ({ displayDrawer = false, listNotifications }) => {
  return (
    <div className='notifications-container'>
      <div className='menuItem'>
        Your notifications
      </div>
      {
        displayDrawer
          ? <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
              {
                listNotifications && listNotifications.length > 0
                  ? listNotifications.map(({ type, value, html, id }) => (
                    <React.Fragment key={id}>
                      <NotificationItem
                        type={type}
                        value={value}
                        html={html}
                      />
                    </React.Fragment>
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;
