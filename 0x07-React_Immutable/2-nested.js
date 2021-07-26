const { getIn } = require('immutable');

function accessImmutableObject(object, array) {
  return getIn(object, array)
}

module.exports = accessImmutableObject;
