'use strict'
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			const book = this.books[i];
			if (book[type] === value) {
				return book;
			}
		}
		return null
	}

	giveBookByName(bookName) {
		for (let book of this.books) {
			if (book.name === bookName) {
				this.books.splice(this.books.indexOf(book), 1);
				return book;
			}
		}
		return null;
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(assessment, subject) {
		if (assessment < 2 || assessment > 5) {
			return;
		} else if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(assessment);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject)) {
			return 0;
		} else {
			let sumOfRatings = this.marks[subject].reduce(function(x, y) {
				return x + y;
			}, 0);
			return sumOfRatings / this.marks[subject].length;
		}
	}
	getAverage() {
		const subjects = Object.keys(this.marks);
		return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject) / subjects.length, 0)
	}
}