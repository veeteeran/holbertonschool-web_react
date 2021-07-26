const { fromJS, Map } = require('immutable');

const getImmutableObject = object => Map(object);

module.exports = getImmutableObject;