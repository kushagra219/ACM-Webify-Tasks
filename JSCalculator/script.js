let output = 0;
let firstOperand = 0.0;
let secondOperand = 0.0;
let currentOperator = undefined;
let currentFraction = undefined;

const roundAccurately = (number, decimalPlaces) =>
    Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces);

$(".operator .btn").click(function (e) {
    currentOperator = $(this).text();
    currentFraction = undefined;
    console.log(currentOperator);
});

$(".number .btn").click(function (e) {
    let currentNumber = $(this).text();
    console.log(currentNumber);
    if (currentNumber == 'C') {
        output = 0;
        firstOperand = output;
        secondOperand = 0;
        currentOperator = undefined;
        $(".output").text(output);
        return;
    }

    if (currentNumber == '.') {
        if (currentFraction == undefined) {
            if (!currentOperator) {
                currentFraction = 0.1;
                $(".output").text(firstOperand + '.');
            }
            else if (!secondOperand) {
                currentFraction = 0.1;
                $(".output").text(secondOperand + '.');
            }
            currentFraction = 0.1;
        }
        return;
    }

    currentNumber = parseInt(currentNumber);
    if (!currentOperator) {
        if (currentFraction) {
            firstOperand = firstOperand + currentFraction * currentNumber;
            currentFraction /= 10;
        } else {
            firstOperand = firstOperand * 10 + currentNumber;
        }
        // console.log(firstOperand + " " + currentFraction);
        $(".output").text(firstOperand);
    }
    else {
        if (currentFraction) {
            secondOperand = secondOperand + currentFraction * currentNumber;
            currentFraction /= 10;
        } else {
            secondOperand = secondOperand * 10 + currentNumber;
        }
        $(".output").text(secondOperand);
    }

});

$(".equal").click(function (e) {

    if (currentOperator == '+') {
        output = firstOperand + secondOperand;
    } else if (currentOperator == '-') {
        output = firstOperand - secondOperand;
    } else if (currentOperator == 'x') {
        output = firstOperand * secondOperand;
    } else if (currentOperator == '/') {
        output = firstOperand / secondOperand;
    } else {
        $(".output").text(firstOperand);
        return;
    }

    if (output != Infinity)
        output = roundAccurately(output, 5);
    $(".output").text(output);
    console.log(firstOperand + " " + secondOperand + " = " + output);
    firstOperand = output;
    secondOperand = 0.0;
    currentFraction = undefined;
    currentOperator = undefined;
});