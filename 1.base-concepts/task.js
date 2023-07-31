"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
	} else if (discriminant === 0) {
		arr.push(-b / (2 * a));
	} else {
		arr = [];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	let percentPerMonth = percent / 12 / 100;
	let loanBody = amount - contribution;
	let numberOfMonths = new Date(countMonths);

	let amountPerMonth = loanBody * (percentPerMonth + (percentPerMonth / (Math.pow(1 + percentPerMonth, numberOfMonths) - 1)));
	let totalAmount = Number((amountPerMonth * numberOfMonths).toFixed(2));
	return totalAmount;
}