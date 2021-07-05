import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';


export default function NotificationItem({ type = 'default', html, value }) {
  return (
    <>
      {type && value
        ? <li data-notification-type={type}>{value}</li>
        : null
      }
      {html
        ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        : null
      }
    </>
  );
}

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
}
