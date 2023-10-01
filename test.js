// console.log(Number(null)); //0

// const v = 5;
// const v = "banny";
// console.log(v); //Помилка 'Duplicate declaration "value"'

// const v;
// v = 10;
// console.log(v); //Помилка 'Missing initializer in const declaration'

// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min); //-10

// const name = "bob";
// const age = 20;
// const obj = { name, age };
// console.log(obj); //{name: 'bob', age: 20}

// const piece = {
// 	x: 0,
// 	y: 0,
// 	move(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	},
// };
// piece.move(10, 10);
// console.log(piece); //{ x: 10, y: 10, move: f }

// const [a, , b] = "JavaScript is awesome".split(" ");
// console.log(a, b);//'JavaScript', 'awesome'

// const {
// 	name,
// 	age,
// 	gender = "m",
// 	hairColor: color,
// } = {
// 	name: "Jacob",
// 	age: 20,
// 	hairColor: "blue",
// };

// console.log(name, age, gender, color); //'Jacob', 20, 'm', 'blue'

// const dog = { name: "Poly" };
// function showDogName() {
// 	console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);
// boundShowDogName(); //'Poly'

// const userA = {
// 	name: "Mango",
// 	age: 5,
// };

// const userB = {
// 	...userA,
// 	age: 10,
// 	happy: true,
// };

// console.log(userB); //{name: 'Mango', age: 10, happy: true}

// const person = {
// 	firstName: "Jacob",
// 	showName() {
// 		console.log(this.firstName);
// 	},
// };

// const foo = function (callback) {
// 	callback();
// };

// foo(person.showName);

// const add = (a = 0, b = 10) => a + b;
// const result = add(10);
// console.log(result);

// const sum = (...numbers) =>
// 	numbers.reduce((total, number) => total + number, 2);
// const result = sum(1, 5, 20, 10);
// console.log(result);

// const multiplyByValue = (value, base, ...numbers) => {
// 	return numbers.map((number) => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// const names = ["bob", ...["donald"], "suzy", "lacy", ...["richard", "alex"]];
// console.log(names);

// const confused = "no";
// const myKey = confused;

// const obj = {
// 	[myKey]: false,
// };

// console.log(obj);
