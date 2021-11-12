function finding(matrix) {
	let list = [];
	let first = matrix[0]
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix.length; j++) {
			list.push(matrix[j][matrix[i].length - 1])
		}
	}
	let arr = []
	for (let i = 0; i< matrix.length - 1; i++) {
		arr.push(list[i])
	}
	let another = []
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === arr[arr.length - 1]) {
				another.push(j)
			}
		}
	}
	let next;
	for (let i = another[0]; i < matrix.length; i++) {
		next = matrix[i]
	}
	let anotherNext = []
	for (let index = 0; index < next.length - 1; index++) {
		anotherNext.push(next[index])
	}
	let idx = anotherNext.length - 1;
	let firstList = []
	while (idx >= 0) {
		firstList.push(anotherNext[idx]);
		idx -= 1
	}
	
	let second = []
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === arr[0]) {
				second.push(i)
			}
		}
	}
	let secondInfos = matrix[second[0]];
	let secondList = []
	for (let i = 0; i < secondInfos.length - 1; i++) {
		secondList.push(secondInfos[i])
	}
	return [...first, ...arr, ...firstList, ...secondList]
}
console.log(finding([[1,2,3],[4,5,6],[7,8,9]]));
// [1,2,3],
// [4,5,6],
// [7,8,9] => Output: 1,2,3,6,9,8,7,4,5
