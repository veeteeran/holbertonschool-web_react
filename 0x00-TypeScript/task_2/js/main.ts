interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string;
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak(): string;
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string;
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string;
  workFromHome() {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string;
  getCoffeeBreak() {
    return 'Cannot get a coffee break';
  }

  workTeacherTasks(): string;
  workTeacherTasks() {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof (salary) === 'number' && salary < 500) {
    return new Teacher;
  }

  return new Director;
}

const isDirector = (employee: any): employee is Director => {
  return employee instanceof Director;
}

const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: string): string => {
  if (todayClass === 'Math') { return 'Teaching Math' }
  else if (todayClass === 'History') { return 'Teaching History' }
}
