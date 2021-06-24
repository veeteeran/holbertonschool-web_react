import $ from "jquery";
const _ = require('lodash');

const p1 = $('<p></p>').text('Holberton Dashboard');
const p2 = $('<p></p>').text('Dashboard data for the students');
const button = $('<button></button>').text('Click here to get started');
const p3 = $('<p></p>').prop('id', 'count');
const p4 = $('<p></p>').text('Copyright - Holberton School');

$('body').append(p1, p2, button, p3, p4);

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
