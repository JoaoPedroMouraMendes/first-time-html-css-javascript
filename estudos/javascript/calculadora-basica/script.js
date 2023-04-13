const buttons = document.querySelectorAll('.button');
const currentOperation = document.getElementById('current-operation');
const previousOperation = document.getElementById('previous-operation');

class Calculator {
    constructor(currentOperation, previousOperation) {
        this.currentOp = currentOperation;
        this.previousOp = previousOperation;
    }

    addDigit(digit) {
        this.currentOp.innerText += digit;
    }

    addOperator(operator) {
        //Se for um operador de delete
        if (operator == 'CE' || operator == 'C' || operator == 'DEL') {
            switch (operator) {
                case 'CE':
                    this.currentOp.innerText = '';
                    break;
                case 'C':
                    this.previousOp.innerText = '';
                    this.currentOp.innerText = '';
                    break;
                case 'DEL':
                    this.currentOp.innerText = this.currentOp.innerText.slice(0, -1);
                    break;
            }
            return;
        }

        //Caso seja um ponto o operador
        if (operator == '.') {
            //Tem que verificar se não ter outro ponto já
            if (!this.currentOp.innerText.includes(operator)) {
                this.currentOp.innerText += operator;
            }
            return;
        }

        //Só passa para a próxima operação se o previousOp ser vázio
        if (this.previousOp.innerText == '') {
            this.previousOp.innerText = `${this.currentOp.innerText} ${operator}`;

            this.currentOp.innerText = '';
            return;
        }
        //Altera o operador 
        else if (this.currentOp.innerText == '') {
            this.previousOp.innerText = `${this.previousOp.innerText.slice(0, -1)} ${operator}`;
            return;
        }

        //Pega o valor da váriavel previousOp e converte as strings para números
        const previousNumber = +this.previousOp.innerText.split(' ')[0];
        const currentNumber = +this.currentOp.innerText;
        const currentOperator = this.previousOp.innerText.split(' ')[1];

        //Se tiver valor nos dois campos de número faz a conta
        switch (currentOperator) {
            case '+': this.result(previousNumber + currentNumber, operator);
                break;
            case '-': this.result(previousNumber - currentNumber, operator);
                break;
            case '/': this.result(previousNumber / currentNumber, operator);
                break;
            case '*': this.result(previousNumber * currentNumber, operator);
                break;
        }
    }

    result(countResult, operator) {
        if (operator == '=') {
            this.currentOp.innerText = countResult;
            this.previousOp.innerText = '';
            return;
        }
        this.currentOp.innerText = '';
        this.previousOp.innerText = `${countResult} ${operator}`;
    }
}

const clc = new Calculator(currentOperation, previousOperation);

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const button = event.target;

        //Se o botão for númerico
        if (button.classList.contains('number')) {
            clc.addDigit(button.innerText);
        }
        //Se for um operador 
        else {
            clc.addOperator(button.innerText);
        }
    });
});