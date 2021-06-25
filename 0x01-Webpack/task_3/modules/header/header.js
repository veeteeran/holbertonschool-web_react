import $ from "jquery";
import _ from 'lodash';
import './header.css';

$('body').append(
  $('<img>').prop('id', 'logo'),
  $('<h1></h1>').text('Holberton Dashboard')
);

console.log('Init header');
