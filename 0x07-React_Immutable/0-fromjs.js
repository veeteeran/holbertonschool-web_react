const { fromJS } = require('immutable');
// import { fromJS } from 'immutable';

const getImmutableObject = object => fromJS(object);

module.exports = getImmutableObject;