function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) {
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {

	if (!this.marks || !this.marks.length) {
		return 0;
	} else {
		let sum = this.marks.reduce(function(x, y) {
			return x + y;
		}, 0);
		return sum / this.marks.length;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}