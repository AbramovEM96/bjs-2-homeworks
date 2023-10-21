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
    if(this.marks === undefined){
        this.marks = [];
    }
    marksToAdd.forEach(mark => this.marks.push(marksToAdd));
};

Student.prototype.getAverage = function () {
    let sum = this.marks.reduce((acc, itm) => acc + itm);
    let average = sum  / this.marks.length;
    return average;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};