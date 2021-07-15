import React, { PureComponent } from 'react';
import { css } from 'aphrodite';
import './Notifications.css';
import PropTypes from 'prop-types';


class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id, styles } = this.props;
    return (
      <>
        {value
          ? <li data-notification-type={type} className={css(styles)} onClick={() => markAsRead(id)}>{value}</li>
          : null
        }
        {html
          ? <li data-urgent className={css(styles)} dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li>
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
