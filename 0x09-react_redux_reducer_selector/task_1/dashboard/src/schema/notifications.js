import notifications from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
})

const normalizeData = normalize(notifications, [notification])

const getAllNotificationsByUser = userId => {
  const arr = []
  const messages = normalizeData.entities.messages;
  const notifications = normalizeData.entities.notifications;

  for (const id in notifications) {
    if (notifications[id].author === userId)
      arr.push(messages[notifications[id].context])
  }

  return arr
}

export { getAllNotificationsByUser, normalizeData };
