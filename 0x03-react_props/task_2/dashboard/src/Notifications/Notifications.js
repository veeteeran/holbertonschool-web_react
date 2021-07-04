import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem
          type='urgent'
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
          top: "1.2rem",
          right: "1.2rem"
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" width="10px" height="10px" />
      </button>
    </div>
  );
}

// export default Notifications;