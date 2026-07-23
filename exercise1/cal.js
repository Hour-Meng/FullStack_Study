const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('button[value]');

function calculate(firstValue, secondValue, operation) {
	switch (operation) {
		case 'add':
			return firstValue + secondValue;
		case 'sub':
			return firstValue - secondValue;
		case 'multiplication':
			return firstValue * secondValue;
		case 'divide':
			return secondValue === 0 ? 'Cannot divide by zero' : firstValue / secondValue;
		case 'module':
			return secondValue === 0 ? 'Cannot divide by zero' : firstValue % secondValue;
		default:
			return '';
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const firstValue = Number(value1Input.value);
		const secondValue = Number(value2Input.value);

		if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
			resultInput.value = '';
			return;
		}

		const result = calculate(firstValue, secondValue, button.value);
		resultInput.value = result;
	});
});

