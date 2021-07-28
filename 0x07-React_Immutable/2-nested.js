import { getIn, fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  return getIn(fromJS(object), array);
}

module.exports = accessImmutableObject;
