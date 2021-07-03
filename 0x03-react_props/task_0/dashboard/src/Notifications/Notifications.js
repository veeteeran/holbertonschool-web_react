import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';


export default function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          position: "absolute",
          top: "1.2rem",
          right: "1.2rem"
        }}
        // aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" width="10px" height="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-default>New course available</li>
        <li data-urgent>New resume available</li>
        <li data-urgent dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      {/* <button
        style={{
          position: "absolute",
          top: "1.2rem",
          right: "1.2rem"
        }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src={closeIcon} alt="close icon" width="10px" height="10px" />
      </button> */}
    </div>
  );
}

// export default Notifications;