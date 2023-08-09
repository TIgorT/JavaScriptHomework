function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
	const people = users.filter(user => user.gender === gender);
	if (people.length === 0) {
		return 0;
	}
	const generalAge = people.reduce((acc, user) => acc + user.age, 0)
	const averageAgeValue = generalAge / people.length;
	return averageAgeValue;
}

//  Второй вариант
//function getUsersNamesInAgeRange(users, gender) {
//	const people = users.filter(user => user.gender === gender).reduce((acc, user, index, users) => {
//		acc += user.age;
//		if (index === users.length - 1) {
//			return acc / users.length;
//		}
//		return acc;
//	}, 0)
//	return people;
//}