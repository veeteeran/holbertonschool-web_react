import React, { PureComponent } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {value
          ? <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>
          : null
        }
        {html
          ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li>
          : null
        }
      </>
    );
  }
}

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
  // markAsRead: ,
  // key: 
}

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;
