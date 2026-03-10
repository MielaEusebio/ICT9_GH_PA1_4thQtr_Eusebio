// JavaScript Conditionals

function identify_sign() {
    var num1 = document.getElementById("input1").value;

    if(num1 > 0) {
        document.getElementById("output").innerHTML = "It is positive.";
    }
    else if(num1 < 0){
        document.getElementById("output").innerHTML = "It is negative.";

    }
    else if(num1 == 0){
        document.getElementById("output").innerHTML = "It is zero.";

    }
}