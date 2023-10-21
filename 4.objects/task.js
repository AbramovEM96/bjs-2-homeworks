function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
};

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
    return this.marks ? this.marks.push(...marksToAdd) : NaN
};

Student.prototype.getAverage = function () {
    return this.marks.reduce(function (acc, mark) {
        return acc + mark;
      }, 0) / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};