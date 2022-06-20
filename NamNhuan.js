function kiemtranamnhuan() {
    let Year = +document.getElementById("Year").value
    let isLeapYear = false;

    if (Year % 4 == 0) {
        if (Year % 100 == 0) {
            if (Year % 400 == 0) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        let result = ("Năm " + Year + " là năm nhuận");
        document.getElementById("result").innerHTML = result
    } else {
        let result = ("Năm " + Year + " không là năm nhuận");
        document.getElementById("result").innerHTML = result
    }
}