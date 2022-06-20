function Add() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sum = number1 + number2;
    let result = "Ket qua la " + number1 + " + " + number2 + " = " + Sum;
    document.getElementById("result").innerHTML = result;
}

function Sub() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Sub = number1 - number2;
    let result = "Ket qua la " + number1 + " - " + number2 + " = " + Sub;
    document.getElementById("result").innerHTML = result;
}

function Multi() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Multi = number1 * number2;
    let result = "Ket qua la " + number1 + " * " + number2 + " = " + Multi;
    document.getElementById("result").innerHTML = result;
}

function Divi() {
    let number1 = +document.getElementById("num1").value;
    let number2 = +document.getElementById("num2").value;
    let Divi = number1 / number2;
    let result = "Ket qua la " + number1 + " / " + number2 + " = " + Divi;
    document.getElementById("result").innerHTML = result;
}