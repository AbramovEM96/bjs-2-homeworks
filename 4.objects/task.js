'use strict';

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){
        this.marks = [];
    }
    this.marks.push(mark);
}

Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((a, b) => a + b);
    let average = sum  / this.marks.length;
    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
