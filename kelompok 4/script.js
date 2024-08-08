let display = document.getElementById('display');
        let currentNumber = '';
        let previousNumber = '';
        let operator = null;

        function appendNumber(number) {
            currentNumber += number;
            updateDisplay();
        }

        function chooseOperator(selectedOperator) {
            if (currentNumber === '') return;
            if (previousNumber !== '') {
                calculate();
            }
            operator = selectedOperator;
            previousNumber = currentNumber;
            currentNumber = '';
        }

        function calculate() {
            let computation;
            const prev = parseFloat(previousNumber);
            const curr = parseFloat(currentNumber);
            if (isNaN(prev) || isNaN(curr)) return;
            switch (operator) {
                case '+':
                    computation = prev + curr;
                    break;
                case '-':
                    computation = prev - curr;
                    break;
                case '*':
                    computation = prev * curr;
                    break;
                case '/':
                    computation = prev / curr;
                    break;
                default:
                    return;
            }
            currentNumber = computation;
            operator = null;
            previousNumber = '';
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentNumber;
        }
