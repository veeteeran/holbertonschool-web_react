import React from 'react';
import './Notifications.css';
// import closeIcon from './close-icon.png';
// import { getLatestNotification } from '../utils/utils';


export default function NotificationItem(props) {
  const { type, html, value } = props;
  return (
    <>
      {type && value ?
        <li data-notification-type={type}>{value}</li> :
        null
      }
      {html ?
        <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> :
        null
      }
    </>
  );
}

// export default Notifications;