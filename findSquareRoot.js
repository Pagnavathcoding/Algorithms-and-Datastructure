function findSquareRoot(number) {
	let list = [];
	for (let i = 0; i <= number; i++) {
		for (let j = 0; j <= number; j++) {
			if (i * j === number && i == j) {
				i = j
				list.push(i);
			}
		}
	}
	return (list.length > 0) ? list[0] : "Not Found!";
}
const sqrt = findSquareRoot(81);
console.log(sqrt)
// Input: 81
// Output: 9
// 9^2 = 81
