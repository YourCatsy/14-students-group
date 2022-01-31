class Group {
  #students = [];

  get students() {
    return this.#students;
  }

  addStudent(student) {
    if (this.isStudentValid(student)) {
      this.students.push(student);
    }
  }
  getAllMarks() {
    return this.students.reduce((previous, current) => [...previous, ...current.marks], []);
  }
  getMarkSum() {
    return this.getAllMarks().reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  getAverageMark() {
    return this.getMarkSum() / this.getAllMarks().length;
  }

  isStudentValid(student) {
    return student instanceof Student;
  }
}

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));
console.log(group.getAverageMark());

console.log(group.students.length);
group.addStudent({});
console.log(group.students.length);