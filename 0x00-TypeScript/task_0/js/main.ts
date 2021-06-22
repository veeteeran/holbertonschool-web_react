interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student_1: Student = {
  firstName: 'Foo',
  lastName: 'Bar',
  age: 99,
  location: 'Nowhere'
}
const student_2: Student = {
  firstName: 'Baz',
  lastName: 'Luhrmann',
  age: 59,
  location: 'Sydney'
}

const arr: Array<Student> = [student_1, student_2];

const generateTableHead = (table: HTMLTableElement, data: any) => {
  const thead = table.createTHead();
  const row = thead.insertRow();
  for (const key of data) {
    if (key === 'firstName' || key === 'lastName' || key === 'location') {
      const th = document.createElement("th");
      const text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
}

const generateTable = (table: HTMLTableElement, data: any) => {
  for (const element of data) {
    const row = table.insertRow();
    for (const key in element) {
      if (key === 'firstName' || key === 'lastName' || key === 'location') {
        const cell = row.insertCell();
        const text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
}

const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);
let data = Object.keys(arr[0]);
generateTable(table, arr);
generateTableHead(table, data);
