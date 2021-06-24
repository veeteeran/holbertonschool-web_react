import $ from "jquery";

const createParagraphs = () => {
  const p1 = $('<p></p>').text('Holberton Dashboard');
  const p2 = $('<p></p>').text('Dashboard data for the students');
  const p3 = $('<p></p>').text('Copyright - Holberton School');
  $('body').append(p1, p2, p3);
}

$(document).ready(() => createParagraphs());