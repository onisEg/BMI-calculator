

// handeling id's
// hadnel kg value
// handel cm value
// conver cm to m value
// calculate and get resualt
// show result in html page
// if condtion about category
// validation input
// show error message if input is not valid



var cmInput = document.getElementById('inputCm');
var kgInput = document.getElementById('inputKg');
var result = document.getElementById('resalt');
var disc = document.getElementById('disc');

cmInput.addEventListener('input', calculateBmi);
kgInput.addEventListener('input', calculateBmi);

function calculateBmi() {
    var cmValue = Number(cmInput.value);
    var kgValue = Number(kgInput.value);

    if (kgValue > 0 && cmValue > 0) {

        var mValue = cmValue / 100;
        var bmi = kgValue / (mValue * mValue);

        result.innerHTML = bmi.toFixed(2)
        var category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            category = "Normal weight";
        }
        else if (bmi >= 25 && bmi < 30) {
            category = "Overweight";
        }
        else if (bmi >= 30) {
            category = "Obese";
        }
        disc.innerHTML = category;
    } else {
        result.innerHTML = "Invalid input";
        disc.innerHTML = "...";
    }
}