function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
};

const student1 = new Student ("Anna", "Famel", 19);
const student2 = new Student ("Petr", "Male", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (Array.isArray(this.marks)) {
    this.marks.push(...marks);
  } 
};

Student.prototype.getAverage = function () {
    if (Array.isArray(this.marks) && this.marks.length > 0) {
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  }
  return 0;
  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
