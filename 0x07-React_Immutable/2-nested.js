import { getIn, Map } from 'immutable';

function accessImmutableObject(object, array) {
  return getIn(Map(object), array);
}

module.exports = accessImmutableObject;
