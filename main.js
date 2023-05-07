let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[sorted.length - 1];
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0];
}

class Process {
  static toJSON(obj) {
    return JSON.stringify(obj);
  }
  static fromJSON(str) {
    return JSON.parse(str);
  }
}
const callback1 = (str) => {
  const parsed = Process.fromJSON(str);
  console.log(parsed);
}
const callback2 = (str) => {
  const parsed = Process.fromJSON(str);
  result = parsed.map((num) => num * 2);
  console.log(result);
}
const callback3 = (str) => {
  const parsed = Process.fromJSON(str);
  result = parsed.filter((num) => num % 2 === 0);
  console.log(result);
}
const func1 = (data, callback) => {
  const json = Process.toJSON(data);
  return callback(json);
}

const func2 = (data, callback) => {
  const json = Process.toJSON(data);
  setTimeout(() =>
    callback(json), 2000
  )
}


//----------------Console Logging--------------------
console.log("func1 - callback1")
func1(dataArr, callback1);
console.log("func1 - callback2")
func1(dataArr, callback2);
console.log("func1 - callback3")
func1(dataArr, callback3);
console.log("func2 - callback1")
func2(dataArr, callback1);
console.log("func2 - callback2")
func2(dataArr, callback2);
console.log("func2 - callback3")
func2(dataArr, callback3);