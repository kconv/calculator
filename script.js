const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn')

console.log("setting true");
let isFirstNum = true;

let vals = {
	operator: '',
	x: '',
	y: ''
};

function divide(x, y) {
	return x / y;
}

function multiply(x, y) {
	return x * y;
}

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}



function operate(operator, x, y) {
	let result;
	console.log(vals);
	isFirstNum = true;

	switch (operator) {
		case 'd':
			result = divide(x, y);
			break;
		case 'm':
			result = multiply(x, y);
			break;
		case 'a':
			result = add(x, y);
			break;
		case 's':
			result = subtract(x, y)
			break;
		default:
			break;
	}
	clearScreen();
	console.log(result);
	display.innerHTML = result;
}

function storeDigit(n) {
	if (isFirstNum) {
		if (vals.x === '0') {
			vals.x = n;
		} else {
			vals.x += n;
		}
		display.innerHTML = vals.x;
	} else {
		if (vals.y === '') {
			display.innerHTML = vals.x;
		}
		if (vals.y === '0') {
			vals.y = n;
		} else {
			vals.y += n;
		}
		display.innerHTML = vals.y;
	}
	console.log(vals);
}

function getX() {
	return Number(vals.x);
}

function getY() {
	return Number(vals.y);	
}

function storeOperator(operator) {
	vals.operator = operator;
	console.log("setting false");
	isFirstNum = false;
}

function getOperator() {
	return vals.operator;
}

function clearScreen() {
	display.innerHTML = '0';
	vals.x = '';
	vals.y = '';
	console.log("setting true");
	isFirstNum = true;
}

function negateValue() {
	if (isFirstNum) {
		vals.x = -vals.x;
		display.innerHTML = vals.x;
	} else {
		vals.y = -vals.y;
		display.innerHTML = vals.y;
	}
}