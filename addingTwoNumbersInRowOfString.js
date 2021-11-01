class CalculateTwoNumbers { // Pagnavath Coding
	constructor(given) {
		this.given = given;
	}
	calculateTwoNumbers() {
		const data = this.given;
		const operators = {
			addition: "+",
			subtraction: "-",
			multiplication: "*",
			division: "/"
		};
		let list = [];
		for (let i = 0; i < data.length; i++) {
			list.push(data[i]);
		}
		let locatedOperator = [];
		for (let j = 0; j < data.length; j++) {
			if (data[j] === operators.addition) {
				locatedOperator.push(j)
			}
			else if (data[j] === operators.subtraction) {
				locatedOperator.push(j)
			}
			else if (data[j] === operators.multiplication) {
				locatedOperator.push(j)
			}
			else if (data[j] === operators.division) {
				locatedOperator.push(j)
			}
		}
		const firstNumber = list.slice(0, locatedOperator[0]);
		const secondNumber = list.slice(locatedOperator[0] + 1, data.length);
		let firstNumberString = "";
		let secondNumberString = "";
		for (let k = 0; k < firstNumber.length; k++) {
			firstNumberString += firstNumber[k];
		}
		for (let l = 0; l < secondNumber.length; l++) {
			secondNumberString += secondNumber[l];
		}
		const FIRST_NUMBER = firstNumberString.trim();
		const SECOND_NUMBER = secondNumberString.trim();
		let calc;
		const calculation = (operator) => {
			if (operator === operators.addition) {
				return calc = parseInt(FIRST_NUMBER) + parseInt(SECOND_NUMBER);
			}
			else if (operator === operators.subtraction) {
				return calc = parseInt(FIRST_NUMBER) - parseInt(SECOND_NUMBER);
			}
			else if (operator === operators.multiplication) {
				return calc = parseInt(FIRST_NUMBER) * parseInt(SECOND_NUMBER);
			}
			else if (operator === operators.division) {
				return calc = parseInt(FIRST_NUMBER) / parseInt(SECOND_NUMBER);
			}
		}
    return calculation(data[locatedOperator[0]]);
	}
}
const calculated = new CalculateTwoNumbers("20-10");
console.log(calculated.calculateTwoNumbers())
// Input: "20-10"
// Output: 10
