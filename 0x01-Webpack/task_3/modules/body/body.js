import $ from "jquery";
import _ from 'lodash';
import './body.css';

$('body').append(
  $('<button></button>').text('Click here to get started'),
  $('<p></p>').prop('id', 'count')
);

let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter));
