import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


const Notifications = ({ displayDrawer = false }) => {
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
              <NotificationItem
                type='default'
                value='New course available'
              />
              <NotificationItem
                type='urgent'
                value='New resume available'
              />
              <NotificationItem
                type='urgent'
                html={getLatestNotification()}
              />
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

Notifications.propTypes = { displayDrawer: PropTypes.bool }

export default Notifications;
