function finding(number) {
  let string = number.toString();
  let arr = []
  for (let index = 0; index < string.length; index++) {
    if (string[index] === ".") {
      arr.push(index)
    }
  }
  if (parseInt(string[arr[0] + 1]) >= 5) {
    const length = string.length - arr[0];
    const x = string.length - length;
    let list = []
    for (let index = 0; index < x; index++) {
      list.push(string[index])
    }
    let add = "";
    for (let index = 0; index < list.length; index++) {
      add += list[index]
    }
    return parseInt(add) + 1;
  }
  else{
    if (parseInt(string[arr[0] + 1]) <= 4) {
    const length = string.length - arr[0];
    const x = string.length - length;
    let list = []
    for (let index = 0; index < x; index++) {
      list.push(string[index])
    }
    let add = "";
    for (let index = 0; index < list.length; index++) {
      add += list[index]
    }
    return parseInt(add);
  }
  }
}
finding(26.5) // Output: 27
