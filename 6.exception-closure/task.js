'use strict'

function parseCount(value) {
	let formattedNumber = parseFloat(value);
	if (isNaN(formattedNumber)) {
		throw Error("Невалидное значение");
	}
	return formattedNumber;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;

		if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	}

	get area() {
		const p = 0.5 * this.perimeter;
		let accordingToHeronFormula = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
		return parseFloat(accordingToHeronFormula);
	}
}

function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},

			get area() {
				return "Ошибка! Треугольник не существует";
			}

		}
	}
}