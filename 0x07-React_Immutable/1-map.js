const { fromJS, Map } = require('immutable');

const getImmutableObject = object => Map(object);

module.exports = getImmutableObject;

const foo = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}

console.log(getImmutableObject(foo))