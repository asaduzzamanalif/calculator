function deleteMe() {
    document.querySelector("#displayResult").value = "";
}

function calc(num) {
    document.querySelector("#displayResult").value += num;
}

function calcResult() {
    let equalTo = document.querySelector("#displayResult").value;
    let totalEqual = eval(equalTo);
    document.querySelector("#displayResult").value = totalEqual;
}