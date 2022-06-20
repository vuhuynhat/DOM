function kiemtrasochan() {
    let number = +document.getElementById("Number").value;

    if (number % 2 == 0) {
        result = "So " + number + " la so chan";

    }
    else {
        result = "So " + number + " la so le";
    }
    document.getElementById("result").innerHTML = result;
}