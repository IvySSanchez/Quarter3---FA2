function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let resultMessage = '';

    if (isNaN(num1) || isNaN(num2)) {
        resultMessage = 'Please enter valid numbers.';
    } else {
        switch (operation) {
            case '+': resultMessage = `The sum is ${num1 + num2}.`; break;
            case '-': resultMessage = `The difference is ${num1 - num2}.`; break;
            case '*': resultMessage = `The product is ${num1 * num2}.`; break;
            case '/': resultMessage = num2 !== 0 ? `The quotient is ${num1 / num2}.` : 'Cannot divide by zero.'; break;
            case '%': resultMessage = `The remainder is ${num1 % num2}.`; break;
        }
    }
    document.getElementById("result").innerText = resultMessage;
}