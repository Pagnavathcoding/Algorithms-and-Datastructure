function sortEvenOddNumbers(number) {
	let listEven = [];
	let listOdd = [];
	for (let i = 0; i < number.length; i++) {
		if (Number(number[i]) % 2 === 0) {
			listEven.push(Number(number[i]))
		}
		else {
			listOdd.push(Number(number[i]))
		}
	}
	for (let j = 0; j < listEven.length; j++) {
		for (let k = 0; k < listEven.length; k++) {
			if (listEven[k] > listEven[k + 1]) {
				const largerEven = listEven[k];
				listEven[k] = listEven[k + 1];
				listEven[k + 1] = largerEven
			}
		}
	}
	for (let l = 0; l < listOdd.length; l++) {
		for (let m = 0; m < listOdd.length; m++) {
			if (listOdd[m] > listOdd[m + 1]) {
				const largerOdd = listOdd[m];
				listOdd[m] = listOdd[m + 1];
				listOdd[m + 1] = largerOdd;
			}
		}
	}
	let fullList = listEven.concat(listOdd);
	if (fullList.length === 0) return "Please Input Number.";
	let add = "";
	for (let index = 0; index < fullList.length; index++) {
		add += fullList[index]
	}
	let none = "";
	for (let index = 0; index < number.length; index++) {
		none += "NaN"
	}
	if (add === none) {
		return "Please Input Number not Charactor!"
	}
	return add;
}
const found = sortEvenOddNumbers("3908035809834098383480834098")
console.log(found) 
// Input: 3908035809834098383480834098
// Output: 0000004448888888833333359999
